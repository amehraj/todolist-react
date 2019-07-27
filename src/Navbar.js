import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="nav-wrapper blue darken 2">
            <a className="brand-log">pingusta's Website</a>
            <ul className="right">
                <li><Link to="/">pingusta's Todo List</Link></li>
                <li><Link to="/about">About pingusta</Link></li>
                <li><Link to="/contact">Contact pingusta</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar