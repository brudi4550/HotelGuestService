import React from 'react';
import BookingRow from './BookingRow';

function BookingsTable(props) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Booking Number</th>
                    <th>From</th>
                    <th>To</th>
                    <th className='d-flex justify-content-center'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.bookings.map(booking => <BookingRow key={booking['booking_id']} update={props.update} booking={booking} />)}
            </tbody>
        </table>
    )

}

export default BookingsTable;