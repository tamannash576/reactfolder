import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="hero-section1">
            <div className="hero-container">
                <h1 className="hero-title">
                    Your Health,
                    <span className="highlight">Our Priority</span>
                </h1>
                <p className="hero-subtitle">
                    Book appointments with verified doctors, manage your health records,
                    and get quality healthcare from the comfort of your home.<br /><br />
                </p>
                <div className="hero-buttons">
                    <Link to="/Appointment">
                        <button className="btn primary-btn">
                            📅 Book Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Header;

