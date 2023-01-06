import React from 'react';
import RoomTable from '../components/RoomTable';
import SearchOpenRoomsForm from '../components/SearchOpenRoomsForm';

class OpenRooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            from: null,
            to: null
        }
        this.update = this.update.bind(this);
    }

    update(rooms, from, to) {
        this.setState({
            rooms: rooms,
            from: from,
            to: to
        });
    }

    render() {
        const bookingInfo = {from: this.state.from, to: this.state.to};
        return (
            <div>
                <SearchOpenRoomsForm update={this.update} />
                <div>
                    <h3>Open Rooms In Date Range:</h3>
                    <RoomTable bookingInfo={bookingInfo} rooms={this.state.rooms}></RoomTable>
                </div>
            </div>
        );
    }

}

export default OpenRooms;