import React from 'react';
import axios from 'axios';

function AddRoomForm(props) {
    async function handleSubmit(event) {
        event.preventDefault();
        const roomNr = event.target.roomNr.value;
        const type = event.target.type.value;
        await axios.post('/addRoom/' + roomNr + '/' + type);
        props.getRooms();
    }

    return (
        <div>
            <h5>Add a room</h5>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="roomNr">Room Number:</label><br />
                <input type="text" id="roomNr" name="roomNr" /><br />
                <label htmlFor="roomType">Room Type:</label><br />
                <select id="type" name="type">
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                </select>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default AddRoomForm;