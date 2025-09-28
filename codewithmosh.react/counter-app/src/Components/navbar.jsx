import React from 'react';

const NavBar = (props) => {
    const {totalCounters} = props;
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </div>
        </nav>
    );
};

export default NavBar;