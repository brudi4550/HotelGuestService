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
                    <th>
                        <div className='d-flex justify-content-center'>
                            Edit Bookings
                        </div>
                    </th>
                    <th>
                        <div className='d-flex justify-content-center'>
                            Edit Room
                        </div>
                    </th>
                    {
                        props.bookingInfo == null &&
                        <th>
                            <div className='d-flex justify-content-center'>
                                Delete Room
                            </div>
                        </th>
                    }
                </tr>
            </thead>
            <tbody>
                {sorted.map(room => <RoomRow key={room['id']} room={room} update={props.update} bookingInfo={props.bookingInfo}></RoomRow>)}
            </tbody>
        </table>
    )
}

export default RoomTable;