import React from 'react';
import axios from 'axios';

class AddRoomForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            roomNr: null,
            roomType: 'Single'
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

    async handleSubmit(event) {
        event.preventDefault();
        await axios.post('/addRoom/' + this.state.roomNr + '/' + this.state.roomType);
        window.location.reload();
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="roomNr">Room Number:</label><br />
                <input onChange={this.handleRoomNumberChange} type="text" id="roomNr" name="roomNr" /><br />
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

export default AddRoomForm;