import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

export default function () {
    const [show, setShow] = useState(false);
    const handleToggleShow = function () {
        setShow(!show);
    }
    const navClassName = function ({ isActive }) {
        return (isActive) ? 'link link--active' : 'link';
    }
    return (
        <div className="navbar">
            <div className="brand">
                <img className="logo" src={logo} alt="logo" />
                <h1 className="name">LoserBot</h1>
            </div>
            <div className={(show) ? "menu menu--active" : "menu"}>
                <NavLink to="/" className={navClassName}>Home</NavLink>
                <NavLink to="/commands" className={navClassName}>Commands</NavLink>
                <NavLink to="/donate" className={navClassName}>Donate</NavLink>
            </div>
            <button className="toggle" onClick={handleToggleShow}>
                {
                    (show) ? <FaTimes className="icon" /> : <FaBars className="icon" />
                }
            </button>
        </div>
    );
}