import React from 'react';
import RoomTable from '../components/RoomTable';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
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
        const sorted = res.data.sort((a, b) => a.room_number - b.room_number);
        this.setState({
            rooms: sorted
        })
    }

    render() {
        return (
            <div>
                <RoomTable update={this.getRooms} rooms={this.state.rooms} />
            </div >
        )
    }
}

export default Home;