import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

function Navbar() {
    const [show, setShow] = useState(false);
    const handleToggleShow = function () {
        setShow(!show);
    }
    const navClassName = function ({ isActive }) {
        return (isActive) ? 'navbar__link navbar__link--active' : 'navbar__link';
    }
    return (
        <div className="navbar">
            <div className="navbar__brand">
                <img className="navbar__logo" src={logo} alt="logo" />
                <p>LoserBot</p>
            </div>
            <div className={(show) ? "navbar__menu navbar__menu__active" : "navbar__menu"}>
                <NavLink to="/" className={navClassName}>Home</NavLink>
                <NavLink to="/commands" className={navClassName}>Commands</NavLink>
                <NavLink to="/donate" className={navClassName}>Donate</NavLink>
            </div>
            <button className="navbar__toggle" onClick={handleToggleShow}>
                {
                    (show)
                    ?
                    <FaTimes className="navbar__toggle__icon" />
                    :
                    <FaBars className="navbar__toggle__icon" />
                }
            </button>
        </div>
    );
}

export default Navbar;