import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddRoomForm(props) {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        const roomNr = event.target.roomNr.value;
        const type = event.target.type.value;
        await axios.post('/rooms', {
            roomNr: roomNr,
            roomType: type
        });
        navigate('/');
    }

    return (
        <div className='col-6 mt-3'>
            <h5 className='border-bottom'>Add a room</h5>
            <form className="form-horizontal" onSubmit={(e) => handleSubmit(e)}>
                <label className='control-label' htmlFor="roomNr">Room Number:</label>
                <input className='form-control' type="text" id="roomNr" name="roomNr" /><br />
                <label className='' htmlFor="roomType">Room Type:</label>
                <select className='form-control' id="type" name="type">
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                </select>
                <br />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default AddRoomForm;