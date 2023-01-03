import React from 'react';
import RoomRow from './RoomRow';

function RoomTable(props) {
    const sorted = props.rooms.sort((a, b) => a.room_number - b.room_number);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Room Number</th>
                    <th>Room Type</th>
                    {
                        props.bookingInfo != null &&
                        <th>Book Room</th>
                    }
                    <th>Edit Bookings</th>
                    <th>Edit Room</th>
                    <th>Delete Room</th>
                </tr>
            </thead>
            <tbody>
                {sorted.map(room => <RoomRow key={room['id']} room={room} update={props.update} bookingInfo={props.bookingInfo}></RoomRow>)}
            </tbody>
        </table>
    )
}

export default RoomTable;