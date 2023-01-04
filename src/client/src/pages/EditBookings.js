import React from 'react';
import axios from 'axios';
import withRouter from '../withRouter';
import BookingsTable from '../components/BookingsTable';

class EditBookings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getBookings = this.getBookings.bind(this);
    }

    componentDidMount() {
        this.getBookings();
    }

    async getBookings() {
        const res = await axios.get('/bookings/', {
            params: {
                roomNr: this.props.params.roomNr
            }
        });
        this.setState({ bookings: res.data });
    }

    async handleSubmit(event) {
        event.preventDefault();
        await axios.post('/bookings', {
            roomNr: this.props.params.roomNr,
            from: event.target.from.value,
            to: event.target.to.value
        });
        await this.getBookings();
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="from">From Date:</label><br />
                    <input type="date" id="from" name="from" /><br />
                    <label htmlFor="to">To Date:</label><br />
                    <input type="date" id="to" name="to" />
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
                <BookingsTable bookings={this.state.bookings} update={this.getBookings} />
            </div>

        )
    }
}

export default withRouter(EditBookings);