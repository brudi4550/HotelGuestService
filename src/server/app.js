const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config({ path: __dirname + '/.env' })
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const db = require('./databaseService.js');
db.connect();

app.get('/rooms', async (req, res) => {
  const dbRes = await db.getRooms();
  if (dbRes) {
    res.status(200).send(dbRes);
  } else {
    res.status(500).send({
      message: 'Something went wrong'
    })
  }
});

app.post('/addRoom/:roomNr/:roomType', async (req, res) => {
  const roomNr = req.params['roomNr'];
  const roomType = req.params['roomType'];
  const dbRes = await db.addRoom(roomNr, roomType);
  if (dbRes) {
    res.status(200).send({
      message: 'Room added'
    })
  } else {
    res.status(500).send({
      message: 'Room number already exists'
    })
  }
});

app.post('/editRoom/:oldRoomNr/:newRoomNr/:roomType', async (req, res) => {
  const oldRoomNr = req.params['oldRoomNr'];
  const newRoomNr = req.params['newRoomNr'];
  const roomType = req.params['roomType'];
  const dbRes = await db.editRoom(oldRoomNr, newRoomNr, roomType);
  if (dbRes) {
    res.status(200).send({
      message: 'Room added'
    })
  } else {
    res.status(500).send({
      message: 'Room number already exists'
    })
  }
});


app.delete('/room/:roomNr', async (req, res) => {
  const roomNr = req.params['roomNr'];
  try {
    const deleteBookingsRes = await db.deleteAllBookings(roomNr);
    const dbRes = await db.deleteRoom(roomNr);
    res.status(200).send({
      message: 'Room and all its bookings deleted'
    })
  } catch (e) {
    res.status(500).send({
      message: 'Couldn\'t find room number'
    })
  }
});

app.get('/bookings/:roomNr', async (req, res) => {
  const roomNr = req.params['roomNr'];
  const dbRes = await db.getBookings(roomNr);
  if (dbRes) {
    res.status(200).send(dbRes);
  } else {
    res.status(500).send({
      message: 'Something went wrong'
    })
  }
});

app.post('/addBooking/:roomNr', async (req, res) => {
  const roomNr = req.params['roomNr'];
  const from = req.body.from;
  const to = req.body.to;
  const dbRes = await db.addBooking(roomNr, from, to);
  if (dbRes) {
    res.status(200).send({
      message: 'Booking added'
    })
  } else {
    res.status(500).send({
      message: 'Booking couldnt be made, possibly because this room as already booked at this date'
    })
  }
});

app.delete('/booking/:bookingNr', async (req, res) => {
  const bookingNr = req.params['bookingNr'];
  const dbRes = await db.deleteBooking(bookingNr);
  if (dbRes) {
    res.status(200).send({
      message: 'Booking deleted'
    })
  } else {
    res.status(500).send({
      message: 'Booking couldnt be deleted, something went wrong'
    })
  }
});

app.get('/openRoomsInRange/:from/:to', async (req, res) => {
  const from = req.params['from'];
  const to = req.params['to'];
  const dbRes = await db.getOpenRoomsInRange(from, to);
  if (dbRes) {
    res.status(200).send(dbRes);
  } else {
    res.status(500).send({
      message: 'Something went wrong'
    })
  }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(PORT, () => {
  console.log(`HotelService backend running on ${PORT}`);
});
