import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
        </nav>
    );
};

export default NavBar;