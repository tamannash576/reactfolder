import React from 'react';

const stats = [
    { number: '500+', label: 'Verified Doctors' },
    { number: '10,000+', label: 'Happy Patients' },
    { number: '50+', label: 'Specialties' },
    { number: '24/7', label: 'Support Available' },
];
function SpecialityMenu() {
    return (

        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialityMenu;

