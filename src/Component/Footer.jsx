import React from 'react';
const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-grid">
                {/* Left Column */}
                <div className="footer-brand">
                    <p className="footer-desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Company Links */}
                <div className="footer-column">
                    <p className="footer-heading">COMPANY</p>
                    <ul className="footer-list">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-column">
                    <p className="footer-heading">GET IN TOUCH</p>
                    <ul className="footer-list">
                        <li>+91-123456789</li>
                        <li>Prescripto912@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr className="footer-divider" />
            <p className="footer-bottom-text">
                © 2024 Prescripto - All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
