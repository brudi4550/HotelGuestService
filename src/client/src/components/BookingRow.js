import React from 'react';
import axios from 'axios';

function BookingRow(props) {
    async function deleteBooking() {
        await axios.delete('/bookings/' + props.booking.booking_id);
        props.update();
    }

    return (
        <tr>
            <td>{props.booking.booking_id}</td>
            <td>{props.booking.booked_from}</td>
            <td>{props.booking.booked_until}</td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteBooking()}>
                    Delete Booking
                </button>
            </td>
        </tr>
    )
}

export default BookingRow;