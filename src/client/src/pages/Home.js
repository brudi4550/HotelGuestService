import React from 'react';
import RoomTable from '../components/RoomTable';
import AddRoomForm from '../components/AddRoomForm';

class Home extends React.Component {

    render() {
        return (
            <div>
                <AddRoomForm />
                <RoomTable />
            </div>
        )
    }
}

export default Home;