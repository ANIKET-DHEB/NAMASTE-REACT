import { useState } from "react";
// import "./LoginSignup.css"; // Importing CSS for styling

const LoginSignup = ({ onClose }) => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="login-container">
            <div className="form-container">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>
                <div className="input-group">
                    <input type="text" placeholder="Username" required />
                </div>
                {isSignup && (
                    <div className="input-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                )}
                <div className="input-group">
                    <input type="password" placeholder="Password" required />
                </div>
                <button className="auth-btn">{isSignup ? "Sign Up" : "Login"}</button>
                <p className="toggle-text" onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? "Already have an account? Login" : "New user? Sign up"}
                </p>
            </div>
        </div>
    );
};

export default LoginSignup;
