import React, { useState } from 'react';


const defaultUserData = {
    name: 'Herry',
    email: 'herry@example.com',
    phone: '1234567890',
    gender: 'Male',
    dob: '1990-01-01',
    image: '',
    address: {
        line1: '123 Main Street',
        line2: 'City, State, ZIP',
    }
};

const MyProfile = () => {
    const [userData, setUserData] = useState(defaultUserData);
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState(null);

    const handleSave = () => {
        // Save locally (no backend)
        if (image) {
            setUserData(prev => ({ ...prev, image: URL.createObjectURL(image) }));
        }
        setIsEdit(false);
    };

    return (
        <div className="profile-container1">
            <label htmlFor="image">
                <div className="profile-image-wrapper">
                    <img
                        className="profile-image"
                        src={image ? URL.createObjectURL(image) : userData.image || 'https://github.com/avinashh10x/doctor-apointment-booking/blob/master/frontend/src/assets/profile_pic.png?raw=true'}
                        alt="Profile"
                    />
                    {isEdit && <div className="upload-overlay">📤</div>}
                </div>
                {isEdit && <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />}
            </label>

            {isEdit ? (
                <input
                    className="input name-input"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
            ) : (
                <h2 className="name-display">{userData.name}</h2>
            )}

            <hr />

            <div className="section">
                <p className="section-title">Contact Info</p>
                <div className="field">
                    <label>Email:</label>
                    <span>{userData.email}</span>
                </div>

                <div className="field">
                    <label>Phone:</label>
                    {isEdit ? (
                        <input
                            className="input"
                            value={userData.phone}
                            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        />
                    ) : (
                        <span>{userData.phone}</span>
                    )}
                </div>

                <div className="field">
                    <label>Address:</label>
                    {isEdit ? (
                        <div>
                            <input
                                className="input"
                                value={userData.address.line1}
                                onChange={(e) =>
                                    setUserData({ ...userData, address: { ...userData.address, line1: e.target.value } })
                                }
                            />
                            <input
                                className="input"
                                value={userData.address.line2}
                                onChange={(e) =>
                                    setUserData({ ...userData, address: { ...userData.address, line2: e.target.value } })
                                }
                            />
                        </div>
                    ) : (
                        <span>
                            {userData.address.line1}
                            <br />
                            {userData.address.line2}
                        </span>
                    )}
                </div>
            </div>

            <div className="section">
                <p className="section-title">Basic Info</p>
                <div className="field">
                    <label>Gender:</label>
                    {isEdit ? (
                        <select
                            className="input"
                            value={userData.gender}
                            onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    ) : (
                        <span>{userData.gender}</span>
                    )}
                </div>

                <div className="field">
                    <label>DOB:</label>
                    {isEdit ? (
                        <input
                            className="input"
                            type="date"
                            value={userData.dob}
                            onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
                        />
                    ) : (
                        <span>{userData.dob}</span>
                    )}
                </div>
            </div>

            <div className="actions">
                {isEdit ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                )}
            </div>
        </div>
    );
};

export default MyProfile;

