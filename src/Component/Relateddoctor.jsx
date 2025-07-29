import React from 'react';
import { doctorsList } from '../Data/Doctorsdata';

function RelatedDoctors({ speciality }) {
    // Filter doctors by speciality, or show all if no speciality prop given
    const relatedDoctors = speciality
        ? doctorsList.filter(doc => doc.speciality === speciality)
        : doctorsList;

    return (
        <div className="related-section">
            <h3 className="related-title">Related Doctors</h3>
            <p className="related-subtitle">
                Simply browse through our extensive list of trusted doctors.
            </p>

            <div className="related-card-container">
                {relatedDoctors.map((doc) => (
                    <div key={doc._id} className="related-card">
                        <img className="doctor-image1"
                            src={doc.image}
                            alt={doc.name}
                        />
                        <div className="related-card-content">
                            <div className={`availability ${doc.fees <= 100 ? 'available' : 'not-available'}`}>
                                <span className="dot"></span>
                                <span>{doc.fees <= 100 ? 'Available' : 'Not Available'}</span>
                            </div>
                            <h4>{doc.name}</h4>
                            <p>{doc.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RelatedDoctors;
