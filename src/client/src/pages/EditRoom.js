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

    async handleSubmit(event) {
        event.preventDefault();
        await axios.put('/rooms/' + this.props.params.roomNr, {
            newRoomNr: this.state.roomNr,
            roomType: this.state.roomType
        });
        document.location.href = "/";
    }

    render() {
        return (
            <div className='col-3'>
                <h5 className='border-bottom mt-3'>Edit a room</h5>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label className='label-control' htmlFor="roomNr">Room Number:</label>
                        <input className='form-control' onChange={this.handleRoomNumberChange} value={this.state.roomNr} type="text" id="roomNr" name="roomNr" /><br />
                        <label className='label-control' htmlFor="roomType">Room Type:</label><br />
                        <select className='form-control' onChange={this.handleRoomTypeChange} value={this.state.roomType} id="type" name="type">
                            <option value="Single">Single</option>
                            <option value="Double">Double</option>
                            <option value="Suite">Suite</option>
                        </select>
                        <input className='btn btn-primary mt-3' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(EditRoom);