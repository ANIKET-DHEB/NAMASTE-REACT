import { useState } from "react";
import "../styles/LoginSignup.css";

const LoginSignup = ({ onClose }) => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="login-container">
            <div className="form-container">

                {/* Close Button */}
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>

                {/* Header */}
                <div className="auth-header">
                    <h2>{isSignup ? "Create Account" : "Welcome Back!"}</h2>

                    <p>
                        {isSignup
                            ? "Sign up to start ordering delicious food."
                            : "Login to continue ordering your favorite food."}
                    </p>
                </div>

                {/* Username */}
                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        required
                    />
                </div>

                {/* Email - Signup Only */}
                {isSignup && (
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                )}

                {/* Password */}
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {/* Login Button */}
                <button className="auth-btn">
                    {isSignup ? "Create Account" : "Login"}
                </button>

                {/* Toggle */}
                <div className="toggle-container">
                    <span>
                        {isSignup
                            ? "Already have an account?"
                            : "Don't have an account?"}
                    </span>

                    <button
                        className="toggle-btn"
                        onClick={() => setIsSignup(!isSignup)}
                    >
                        {isSignup ? "Login" : "Sign Up"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LoginSignup;