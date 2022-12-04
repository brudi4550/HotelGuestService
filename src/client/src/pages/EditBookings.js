import React from 'react';
import axios from 'axios';
import withRouter from '../withRouter';
import BookingsTable from '../components/BookingsTable';

class EditBookings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        await axios.post('/addBooking/' + this.props.params.roomNr, {
            from: event.target.from.value,
            to: event.target.to.value
        });
        window.location.reload();
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="from">From Date:</label><br />
                    <input onChange={this.handleFromChange} type="date" id="from" name="from" /><br />
                    <label htmlFor="to">To Date:</label><br />
                    <input onChange={this.handleToChange} type="date" id="to" name="to" />
                    <input type="submit" value="Submit" />
                </form>
                <BookingsTable roomNr={this.props.params.roomNr} />
            </div>

        )
    }
}

export default withRouter(EditBookings);