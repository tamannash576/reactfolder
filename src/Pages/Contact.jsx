import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you soon.");
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="hero-content">
                    <h1>Contact Us</h1>
                    <p>We're here to help. Reach out to us anytime and we'll get back to you as soon as possible.</p>
                </div>
            </section>

            <div className="contact-wrapper">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions about our services? Need help with booking an appointment? Our friendly team is ready to assist you.</p>

                    <div className="info-cards">
                        <div className="info-card">
                            <div className="icon-box phone"><h4>📞</h4></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                                <span>24/7 Emergency Line</span>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-box mail"><h2>📧 </h2></div>
                            <div>
                                <h3>Email</h3>
                                <p>support@Prescripto.com</p>
                                <span>We reply within 24 hours</span>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-box location"><h4>📍</h4></div>
                            <div>
                                <h3>Address</h3>
                                <p>123 Healthcare Avenue<br />Medical District, MD 12345</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="icon-box clock"><h4>⏰ </h4></div>
                            <div>
                                <h3>Hours</h3>
                                <p>Mon - Fri: 8:00 AM - 8:00 PM<br />Sat - Sun: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h4>💬Send us a Message</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input id="firstName" required placeholder="Enter your first name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input id="lastName" required placeholder="Enter your last name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="Enter your phone number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input id="subject" required placeholder="What's this about?" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" required placeholder="Tell us how we can help you..."></textarea>
                        </div>
                        <button type="submit" className="send-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h3>How do I book an appointment?</h3>
                        <p>Simply browse our doctors, select your preferred specialist, choose an available time slot, and complete the booking process.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Can I cancel or reschedule?</h3>
                        <p>Yes, up to 24 hours before your appointment via your dashboard.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Is my information secure?</h3>
                        <p>Yes. We are fully HIPAA compliant and follow best security practices.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Do you accept insurance?</h3>
                        <p>We work with most major insurance providers. Contact us to verify.</p>
                    </div>
                </div>
            </div>

            <div className="emergency-box">
                <h4>🚨 </h4>
                <h3>Medical Emergency?</h3>
                <p>If you're experiencing a medical emergency, please call 911 immediately or go to your nearest emergency room.</p>
                <button className="emergency-btn">
                    📞 Call Emergency: 911
                </button>
            </div>
        </div>
    );
};

export default Contact;


