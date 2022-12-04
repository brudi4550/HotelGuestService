import React from 'react';
import axios from 'axios';

class BookingRow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBooking = this.deleteBooking.bind(this);
    }

    deleteBooking() {
        axios.delete('/booking/' + this.props.booking.booking_id);
        window.location.reload();
    }

    //check how data about booking is stored
    render() {
        return (
            <tr>
                <td>{this.props.booking.booking_id}</td>
                <td>{this.props.booking.booked_from}</td>
                <td>{this.props.booking.booked_until}</td>
                <td>
                    <button onClick={this.deleteBooking}>
                        Delete Booking
                    </button>
                </td>
            </tr>
        )
    }
}

export default BookingRow;