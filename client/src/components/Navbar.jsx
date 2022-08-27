import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleCloseMenu = () => setShow(false);
    const handleToggleMenu = () => setShow(!show);
    const linkClassName = ({ isActive }) => `link ${isActive ? 'active' : ''}`;
    return (
        <div className="navbar">
            <div className="brand">
                <img className="logo" src={logo} alt="logo" />
                <h1 className="name">LoserBot</h1>
            </div>
            <div className={`menu ${show ? 'active' : ''}`}>
                <NavLink to="/" className={linkClassName} onClick={handleCloseMenu}>Home</NavLink>
                <NavLink to="/commands" className={linkClassName} onClick={handleCloseMenu}>Commands</NavLink>
                <NavLink to="/stats" className={linkClassName} onClick={handleCloseMenu}>Stats</NavLink>
            </div>
            <button className="toggle" onClick={handleToggleMenu}>
                {(show) ? <FaTimes className="icon" /> : <FaBars className="icon" />}
            </button>
        </div>
    );
};

export default Navbar;