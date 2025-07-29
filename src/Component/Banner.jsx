import React from 'react';

const features = [
    {
        icon: '📅',
        title: 'Easy Booking',
        desc: 'Book appointments in just a few clicks with our intuitive interface',
    },
    {
        icon: '✅',
        title: 'Verified Doctors',
        desc: 'All our doctors are verified professionals with proven expertise',
    },
    {
        icon: '⏰',
        title: '24/7 Support',
        desc: 'Get support anytime with our round-the-clock customer service',
    },
    {
        icon: '🔒',
        title: 'Secure & Private',
        desc: 'Your health data is protected with enterprise-grade security',
    },
];

const Banner = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <h2>Why Choose Prescripto?</h2>
                    <p>Experience healthcare like never before with our comprehensive platform</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;


