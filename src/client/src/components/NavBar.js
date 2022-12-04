import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand h1" href="/">HotelService</a>
            </nav>
        )
    }
}

export default NavBar;