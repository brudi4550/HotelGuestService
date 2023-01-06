import React from 'react';

function NavBar(props) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom bg-light">
            <a className="navbar-brand h1" href="/">HotelService</a>
            <div id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/addRoom">Add Room</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/searchRooms">Search open rooms</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;