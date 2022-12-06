require('dotenv').config({ path: __dirname + '/.env' });
const pg = require('pg');
//return only string value without native javascript date object when selecting
pg.types.setTypeParser(1082, function (stringValue) {
    return stringValue;
});
const client = new pg.Client({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});

async function connect() {
    await client.connect();
}

async function getRooms() {
    try {
        const res = await client.query('SELECT * FROM room;');
        return res.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function addRoom(roomNr, roomType) {
    try {
        const res = await client.query('INSERT INTO room(room_number, room_type) VALUES($1, $2);', [roomNr, roomType]);
        return res;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function editRoom(oldRoomNr, newRoomNr, roomType) {
    try {
        const res = await client.query('UPDATE room SET room_number=$2, room_type=$3 WHERE room_number=$1;', [oldRoomNr, newRoomNr, roomType]);
        return res;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function deleteRoom(roomNr) {
    try {
        const res = await client.query('DELETE FROM room WHERE room_number=$1;', [roomNr]);
        return res;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function getBookings(roomNr) {
    try {
        const id = await getRoomIdFromNumber(roomNr);
        const res = await client.query('SELECT * FROM room_booked_on WHERE room_id=$1;', [id]);
        return res.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function addBooking(roomNr, from, to) {
    try {
        const id = await getRoomIdFromNumber(roomNr);
        const overlaps = await overlapsWithOtherBooking(id, from, to);
        if (!overlaps && !(to < from)) {
            const res = await client.query('INSERT INTO room_booked_on(room_id, booked_from, booked_until) VALUES($1, $2, $3);', [id, from, to]);
            return res.rows;
        } else {
            return null;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function overlapsWithOtherBooking(roomId, from, to) {
    try {
        const res = await client.query(
            `SELECT * 
             FROM room_booked_on 
             WHERE room_id = $1
             AND ($2, $3) OVERLAPS (booked_from, booked_until)`, [roomId, from, to]
        );
        return res.rows.length > 0;
    } catch (err) {
        console.log(err);
        return true;
    }
}

async function deleteBooking(bookingNr) {
    try {
        const res = await client.query('DELETE FROM room_booked_on WHERE booking_id=$1', [bookingNr]);
        return res.rows;
    } catch (err) {
        console.log(err);
        return false;
    }
}

async function getOpenRoomsInRange(from, to) {
    try {
        const res = await client.query(
            `SELECT * FROM room
            WHERE id NOT IN (
            SELECT room_id FROM room_booked_on
            WHERE ($1, $2) OVERLAPS (booked_from, booked_until));`, [from, to]
        );
        return res.rows;
    } catch (err) {
        console.log(err);
        return true;
    }
}

async function getRoomIdFromNumber(roomNr) {
    try {
        const res = await client.query('SELECT id FROM room WHERE room_number=$1;', [roomNr]);
        return res.rows[0].id;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = {
    connect,
    getRooms,
    addRoom,
    editRoom,
    deleteRoom,
    getBookings,
    addBooking,
    deleteBooking,
    getOpenRoomsInRange
}