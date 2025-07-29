import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <img
                src="https://raw.githubusercontent.com/avinashh10x/doctor-apointment-booking/8c371bcf0938948939feaf8281ab24242178aab7/frontend/src/assets/logo.svg"
                alt="Logo"
                className="logo"
                onClick={() => navigate('/')}
            />

            <ul className="nav-links">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/Appointment">All DOCTORS</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
                <li><NavLink to="/myprofile">MY PROFILE</NavLink></li>
            </ul>

            <button className="account-btn" onClick={() => navigate('/login')}>
                Create account / Login
            </button>

            {/* MOBILE MENU */}
            <div className={`mobile-menu ${showMenu ? 'active' : ''}`}>
                <div className="mobile-menu-header">

                </div>
                <ul>
                    <li><NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink></li>
                    <li><NavLink to="/Appointment" onClick={() => setShowMenu(false)}>Appointment</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink></li>
                    <li><NavLink to="/Myprofile" onClick={() => setShowMenu(false)}>myprofile</NavLink></li>
                    <li><NavLink to="/Login" onClick={() => setShowMenu(false)}>Login</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

