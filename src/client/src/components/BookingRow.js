import React from 'react';
import axios from 'axios';
import { format } from "date-fns";

function BookingRow(props) {
    async function deleteBooking() {
        await axios.delete('/bookings/' + props.booking.booking_id);
        props.update();
    }
    const bookedFrom = new Date(props.booking.booked_from);
    const bookedFromFmt = format(bookedFrom, "dd.MM.yyyy");
    const bookedUntil = new Date(props.booking.booked_until);
    const bookedUntilFmt = format(bookedUntil, "dd.MM.yyyy");

    return (
        <tr>
            <td>{props.booking.booking_id}</td>
            <td>{bookedFromFmt}</td>
            <td>{bookedUntilFmt}</td>
            <td>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-danger' onClick={() => deleteBooking()}>
                        <i className="bi bi-trash3"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default BookingRow;