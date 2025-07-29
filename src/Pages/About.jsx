import React from 'react';
import { Link } from 'react-router-dom';


const values = [
    { title: 'Compassion', description: 'We prioritize empathy and care in every patient interaction.' },
    { title: 'Integrity', description: 'We uphold the highest ethical standards in everything we do.' },
    { title: 'Innovation', description: 'We constantly evolve to deliver modern healthcare solutions.' },
    { title: 'Accessibility', description: 'We strive to make quality care available for everyone.' },
];

const achievements = [
    'Over 50,000 appointments successfully booked',
    'Rated 4.9 stars by thousands of users',
    '500+ verified doctors across specialties',
    '24/7 support & patient service',
];

const About = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="hero-section2">
                <div className="hero-content2">
                    <h1>About Prescripto</h1>
                    <p>
                        We're on a mission to revolutionize healthcare by making it more accessible,
                        efficient, and patient-centered through innovative technology solutions.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision">
                <div className="card">
                    <div className="icon-circle">🎯</div>
                    <h2>Our Mission</h2>
                    <p>
                        To bridge the gap between patients and healthcare providers by creating
                        a seamless, technology-driven platform that makes quality healthcare
                        accessible to everyone.
                    </p>
                </div>
                <div className="card">
                    <div className="icon-circle">👁️</div>
                    <h2>Our Vision</h2>
                    <p>
                        To become the world's most trusted healthcare platform, where patients
                        can effortlessly connect with doctors and manage their health.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section">
                <div className="section-header">
                    <h2>Our Core Values</h2>
                    <p>The principles that guide everything we do</p>
                </div>
                <div className="value-grid">
                    {values.map((val, idx) => (
                        <div className="value-card" key={idx}>
                            <h3>{val.title}</h3>
                            <p>{val.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section className="achievements-section">
                <div className="section-header">
                    <h2>Our Achievements</h2>
                    <p>Milestones that reflect our commitment to excellence</p>
                </div>
                <ul className="achievement-list">
                    {achievements.map((ach, idx) => (
                        <li key={idx}>✅ {ach}</li>
                    ))}
                </ul>
            </section>

            {/* Story */}
            <section className="story-section">
                <h2>Our Story</h2>
                <div className="story-text">
                    <p>
                        Prescripto was founded in 2024 with a vision to make healthcare more accessible and efficient.
                        What started as a small team of professionals has become a platform trusted by thousands.
                    </p>
                    <p>
                        We tackle real-world issues like long wait times and access to specialists through our
                        seamless system and qualified doctors.
                    </p>
                    <p>
                        Today, we connect patients with trusted healthcare professionals across specialties,
                        delivering a smooth and reliable experience.
                    </p>
                </div>
            </section>


        </div>
    );
};

export default About;


