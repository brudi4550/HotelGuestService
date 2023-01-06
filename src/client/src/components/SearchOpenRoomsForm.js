import React from 'react';
import axios from 'axios';

function SearchOpenRoomsForm(props) {

    async function handleSubmit(e) {
        e.preventDefault();
        const from = e.target.from.value;
        const to = e.target.to.value;
        const open = await axios.get('/rooms/search', {
            params: {
                from: from,
                to: to
            }
        });
        props.update(open.data, from, to);
    }

    return (
        <div>
            <h5 className='border-bottom mt-3'>Search for open rooms in date range:</h5>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className='row'>
                    <div className='col-md-2'>
                        <label className='control-label' htmlFor="from">From:</label>
                        <input className='form-control' type="date" id="from" name="from" />
                    </div>
                    <div className='col-md-2'>
                        <label className='control-label' htmlFor="to">To:</label>
                        <input className='form-control' type="date" id="to" name="to" /><br />
                    </div>
                </div>
                <input className='btn btn-primary mb-3' type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SearchOpenRoomsForm;