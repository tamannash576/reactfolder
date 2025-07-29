import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doctorsList } from "../Data/Doctorsdata";

const DoctorProfile = () => {
    const { id } = useParams();
    const doctor = doctorsList.find((d) => d._id === id);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);

    const availableTimes = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

    const formatDateToYMD = (date) => date.toISOString().split("T")[0];

    const formatDateHeader = (date) => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        if (date.toDateString() === today.toDateString()) return "Today";
        if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";

        return date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
        });
    };

    const handleBookAppointment = (time) => {
        const appointmentDate = formatDateToYMD(selectedDate);
        alert(`Booking appointment with ${doctor.name} on ${appointmentDate} at ${time}.`);
    };
    const handleBookClick = () => {
        if (!selectedTime) {
            alert("Please select a time slot first.");
            return;
        }
        handleBookAppointment(selectedTime);
    };
    if (!doctor) {
        return (
            <div className="container center-text">
                <h1>Doctor not found</h1>
                <Link to="/doctors" className="btn-outline">
                    Back to Doctors
                </Link>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="back-button">
                <Link to="/doctors" className="btn-ghost">
                    ← Back to Doctors
                </Link>
            </div>

            <div className="profile-grid">
                <div className="profile-info">
                    <div className="card">
                        <div className="profile-header">
                            <div className="avatar">❤️</div>
                            <div className="details">
                                <h2>{doctor.name}</h2>
                                <span className="badge">{doctor.speciality}</span>
                                <div className="price">${doctor.fees} - Consultation Fee</div>
                                <div className="info">
                                    <p>⭐ 4.5 Rating</p>
                                    <p>🎓 {doctor.experience}</p>
                                    <p>📍 Location not provided</p>
                                </div>
                            </div>
                        </div>

                        <div className="action-buttons">
                            <button className="btn-primary" onClick={handleBookClick}>Book Appointment</button>

                        </div>
                    </div>

                    <div className="card">
                        <h3>About Dr. {doctor.name.split(" ").pop()}</h3>
                        <p>{doctor.about}</p>
                    </div>

                    <div className="card">
                        <h3>Education & Credentials</h3>
                        <ul>
                            <li>✅ {doctor.degree}</li>
                            <li>✅ Board Certified in {doctor.speciality}</li>
                            <li>✅ Licensed Medical Professional</li>
                        </ul>
                    </div>
                </div>

                <div className="booking-panel">
                    <div className="card">
                        <h3>Select Date</h3>
                        <input
                            type="date"
                            value={formatDateToYMD(selectedDate)}
                            min={formatDateToYMD(new Date())}
                            max={formatDateToYMD(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000))}
                            onChange={(e) => setSelectedDate(new Date(e.target.value))}
                        />

                        <h3 className="mt">Available Times - {formatDateHeader(selectedDate)}</h3>
                        <div className="time-slots">
                            {availableTimes.length > 0 ? (
                                availableTimes.map((time) => (
                                    <button
                                        key={time}
                                        className={`btn-slot ${selectedTime === time ? "selected" : ""}`}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        🕒 {time}
                                    </button>
                                ))
                            ) : (
                                <p>No available slots for this date.</p>
                            )}
                        </div>

                        <div className="fee-info">
                            <strong>Consultation Fee:</strong> ${doctor.fees}
                            <p className="small-text">
                                * Additional tests or procedures may incur extra charges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
