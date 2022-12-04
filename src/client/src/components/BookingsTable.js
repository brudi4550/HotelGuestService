import React from 'react';
import axios from 'axios';
import BookingRow from './BookingRow';

class BookingsTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookings: []
        }
        this.getBookings = this.getBookings.bind(this);
    }

    componentDidMount() {
        this.getBookings();
    }

    async getBookings() {
        const res = await axios.get('/bookings/' + this.props.roomNr);
        console.log(res.data);
        this.setState({ bookings: res.data });
    }

    render() {
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
                    {this.state.bookings.map(booking => <BookingRow key={booking['booking_id']} booking={booking}/>)}
                </tbody>
            </table>
        )
    }
}

export default BookingsTable;