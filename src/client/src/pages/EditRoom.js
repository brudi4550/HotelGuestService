import React from 'react';
import axios from 'axios';
import withRouter from '../withRouter';

class EditRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            roomNr: this.props.params.roomNr,
            roomType: this.props.params.roomType
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRoomNumberChange = this.handleRoomNumberChange.bind(this);
        this.handleRoomTypeChange = this.handleRoomTypeChange.bind(this);
    }

    handleRoomNumberChange(event) {
        this.setState({ roomNr: event.target.value });
    }

    handleRoomTypeChange(event) {
        this.setState({ roomType: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/editRoom/' + this.props.params.roomNr + '/' + this.state.roomNr + '/' + this.state.roomType);
        document.location.href="/";
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="roomNr">Room Number:</label><br />
                <input onChange={this.handleRoomNumberChange} value={this.state.roomNr} type="text" id="roomNr" name="roomNr" /><br />
                <label htmlFor="roomType">Room Type:</label><br />
                <select onChange={this.handleRoomTypeChange} value={this.state.roomType} id="type" name="type">
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default withRouter(EditRoom);