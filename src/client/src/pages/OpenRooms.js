import React from 'react';
import { useLocation } from 'react-router-dom';
import RoomTable from '../components/RoomTable';

function OpenRoomsInDateRange(props) {
    const location = useLocation();

    const dates = {
        from: location.state.from,
        to: location.state.to
    };
    return (
        <div>
            <h3>Open Rooms In Date Range:</h3>
            <h4>{location.state.from} - {location.state.to}</h4>
            <RoomTable bookingInfo={dates} rooms={location.state.open} />
        </div>
    );

}

export default OpenRoomsInDateRange;