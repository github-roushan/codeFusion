import React from 'react';

const NavBar = (props) => {
    console.log(props)
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </div>
        </nav>
    );
};

export default NavBar;