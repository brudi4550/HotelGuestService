import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchOpenRoomsForm(props) {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const from =  e.target.from.value;
        const to = e.target.to.value;
        const open = await axios.get('/openRoomsInRange/' + from + '/' + to);
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