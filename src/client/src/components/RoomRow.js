import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RoomRow extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRoom = this.deleteRoom.bind(this);
    }

    deleteRoom() {
        axios.delete('/room/' + this.props.room.room_number);
        window.location.reload();
    }

    render() {
        return (
            <tr>
                <td>{this.props.room.room_number}</td>
                <td>{this.props.room.room_type}</td>
                <td>
                    <Link to={'/editBookings/' + this.props.room.room_number}>
                        Edit Bookings
                    </Link>
                </td>
                <td>
                    <Link to={'/editRoom/' + this.props.room.room_number + '/' + this.props.room.room_type}>
                        Edit Room
                    </Link>
                </td>
                <td>
                    <button onClick={this.deleteRoom}>
                        Delete Room
                    </button>
                </td>
            </tr>
        )
    }
}

export default RoomRow;