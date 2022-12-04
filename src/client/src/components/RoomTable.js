import React from 'react';
import axios from 'axios';
import RoomRow from './RoomRow';

class RoomList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        }
        this.getRooms = this.getRooms.bind(this);
    }

    componentDidMount() {
        this.getRooms();
    }

    async getRooms() {
        const res = await axios.get('/rooms');
        console.log(res.data);
        this.setState({ rooms: res.data });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Room Type</th>
                        <th>Edit Bookings</th>
                        <th>Edit Room</th>
                        <th>Delete Room</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rooms.map(room => <RoomRow key={room['id']} room={room}></RoomRow>)}
                </tbody>
            </table>
        )
    }
}

export default RoomList;