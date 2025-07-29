import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState("patient");

    const handleLogin = (e) => {
        e.preventDefault();
        alert(`${userType} login successful!`);
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-header">
                    <div className="logo-circle">💊</div>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your Prescripto account</p>
                </div>

                <div className="login-card">
                    <div className="tab-switch">
                        {["patient", "doctor", "admin"].map((type) => (
                            <button
                                key={type}
                                className={`tab ${userType === type ? "active" : ""}`}
                                onClick={() => setUserType(type)}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleLogin} className="login-form">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />

                        <label>Password</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>

                        <div className="form-footer">
                            <Link>Forgot password?</Link>
                        </div>

                        <button type="submit" className="login-button">
                            Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                        </button>
                    </form>

                    <div className="register-link">
                        Don't have an account? <Link to="/register">Create Account</Link>
                    </div>

                    <div className="demo-credentials">
                        <p>Demo Credentials:</p>
                        <p>Email: {userType}@demo.com</p>
                        <p>Password: demo123</p>
                    </div>
                </div>

                <div className="back-home">
                    <Link to="/">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

