import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchOpenRoomsForm(props) {
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const from = event.target.from.value;
        const to = event.target.to.value;
        const open = await axios.post('/getOpenRoomsInRange/', {
            from: from,
            to: to
        });
        navigate('/searchRooms', {
            state: {
                open: open.data,
                from: from,
                to: to
            }
        });
    }

    return (
        <div>
            <h5>Search for open rooms in date range:</h5>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="from">From:</label>
                <input type="date" id="from" name="from" /><br />
                <label htmlFor="to">To:</label>
                <input type="date" id="to" name="to" /><br />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SearchOpenRoomsForm;