import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        if (!agreedToTerms) {
            alert("Please agree to the terms and conditions");
            return;
        }
        alert("Account created successfully!");
    };

    return (
        <div className="register-container1">
            <div className="register-box1">
                <div className="register-header1">

                    <h1>Join Prescripto</h1>
                    <p>Create your account and start your healthcare journey</p>
                </div>

                <form className="form-card" onSubmit={handleRegister}>
                    <h2>Create Account</h2>

                    <div className="form-section">
                        <label>First Name</label>
                        <input type="text" required placeholder="Enter first name" />
                    </div>

                    <div className="form-section">
                        <label>Last Name</label>
                        <input type="text" required placeholder="Enter last name" />
                    </div>

                    <div className="form-section">
                        <label>Email Address</label>
                        <input type="email" required placeholder="Enter your email" />
                    </div>

                    <div className="form-section">
                        <label>Phone Number</label>
                        <input type="tel" required placeholder="Enter phone number" />
                    </div>

                    <div className="form-section">
                        <label>Date of Birth</label>
                        <input type="date" required />
                    </div>

                    <div className="form-section">
                        <label>Gender</label>
                        <select required>
                            <option value="">Select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Prefer not to say</option>
                        </select>
                    </div>

                    <div className="form-section">
                        <label>Address</label>
                        <input type="text" required placeholder="Enter address" />
                    </div>

                    <div className="form-section">
                        <label>Password</label>
                        <div className="password-field">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="Create a strong password"
                            />
                            <button
                                type="button"
                                className="toggle-btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                        <small>Password must be at least 8 characters</small>
                    </div>

                    <div className="form-section">
                        <label>Confirm Password</label>
                        <div className="password-field">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                placeholder="Confirm password"
                            />
                            <button
                                type="button"
                                className="toggle-btn"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </div>

                    <div className="checkbox-section">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                        />
                        <label htmlFor="terms">
                            I agree to the <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy</Link>
                        </label>
                    </div>

                    <button type="submit" className="submit-btn" disabled={!agreedToTerms}>
                        Create Account
                    </button>

                    <p className="login-link">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </form>

                <div className="back-home">
                    <Link to="/">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
