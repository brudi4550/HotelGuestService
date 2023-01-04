import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RoomRow(props) {
    const navigate = useNavigate();

    async function deleteRoom() {
        await axios.delete('/rooms/' + props.room.room_number);
        props.update();
    }

    async function handleClick() {
        await axios.post('/bookings', {
            roomNr: props.room.room_number,
            from: props.bookingInfo.from,
            to: props.bookingInfo.to
        });
        navigate('/');
    }

    return (
        <tr>
            <td>{props.room.room_number}</td>
            <td>{props.room.room_type}</td>
            {
                props.bookingInfo != null &&
                <td>
                    <button className='btn btn-primary' onClick={() => handleClick()}>
                        Book Room on these dates
                    </button>
                </td>
            }
            <td>
                <Link to={'/editBookings/' + props.room.room_number}>
                    Edit Bookings
                </Link>
            </td>
            <td>
                <Link to={'/editRoom/' + props.room.room_number + '/' + props.room.room_type}>
                    Edit Room
                </Link>
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteRoom()}>
                    Delete Room
                </button>
            </td>
        </tr>
    )
}

export default RoomRow;