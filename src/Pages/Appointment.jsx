import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doctorsList, specialityData } from "../Data/Doctorsdata";
import DoctorProfile from "./Doctorprofile";


const Appointment = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");

    const filteredDoctors = doctorsList.filter((doctor) => {
        const matchesSearch =
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty =
            selectedSpecialty === "All Specialties" ||
            doctor.speciality === selectedSpecialty;
        return matchesSearch && matchesSpecialty;
    });

    return (
        <div className="doctors-page">
            <div className="container">
                <div className="header">
                    <h1>Find Your Doctor</h1>
                    <p>Browse through our network of qualified healthcare professionals</p>
                </div>

                <div className="filters">
                    <div className="search-box">
                        <label>Search Doctors</label>
                        <input
                            type="text"
                            placeholder="Search by doctor name or specialty..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="select-box">
                        <label>Specialty</label>
                        <select
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                        >
                            <option>All Specialties</option>
                            {specialityData.map((item) => (
                                <option key={item.speciality}>{item.speciality}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="results-count">
                    Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
                    {selectedSpecialty !== "All Specialties" && ` in ${selectedSpecialty}`}
                </div>

                <div className="doctor-grid">
                    {filteredDoctors.map((doctor) => (
                        <div className="doctor-card" key={doctor._id}>
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="changes1"
                            />
                            <div className="doctor-info">
                                <h3>{doctor.name}</h3>
                                <p className="specialty">{doctor.speciality}</p>
                                <p className="experience">{doctor.experience}</p>
                                <p className="about">{doctor.about}</p>
                                <div className="doctor-footer">
                                    <span className="fees">${doctor.fees}</span>
                                    <Link to={`/doctorprofile/${doctor._id}`} className="btn">
                                        Book Now
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredDoctors.length === 0 && (
                    <div className="no-results">
                        <h3>No doctors found</h3>
                        <p>Try adjusting your search criteria or browse all doctors</p>
                        <button onClick={() => {
                            setSearchTerm("");
                            setSelectedSpecialty("All Specialties");
                        }}>
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Appointment;

