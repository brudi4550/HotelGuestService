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
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.bookings.map(booking => <BookingRow key={booking['booking_id']} booking={booking} />)}
            </tbody>
        </table>
    )

}

export default BookingsTable;