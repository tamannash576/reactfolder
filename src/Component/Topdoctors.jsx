import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doctorsList } from '../Data/Doctorsdata';

function TopDoctor() {
    const navigate = useNavigate();
    const topDocs = doctorsList.slice(0, 4);

    return (
        <div className="top-doctor-section">
            <h2 className="top-title">Top Doctors to Book</h2>
            <p className="top-subtitle">
                Simply browse through our extensive list of trusted doctors.
            </p>


            <div className="top-grid">
                {topDocs.map((doc, i) => (
                    <div
                        className="top-card"
                        key={doc._id}
                        onClick={() => {
                            navigate('/appointment/' + doc._id);
                            scrollTo(0, 0);

                        }}
                    >
                        <img
                            src={doc.image}
                            alt={doc.name}
                            className="changes"
                        />
                        <div className="top-card-body">
                            <div className={`top-availability ${doc.fees <= 100 ? 'available' : 'not-available'}`}>
                                <span className="dot" />
                                <span>{doc.fees <= 100 ? 'Available' : 'Not Available'}</span>
                            </div>
                            <h4>{doc.name}</h4>
                            <p>{doc.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="top-more-button"
                onClick={() => {
                    navigate('/Appointment');
                    scrollTo(0, 0);
                }}
            >
                more
            </button>
        </div>
    );
}

export default TopDoctor;

