import { useState } from "react";
import "../styles/LoginSignup.css";

const LoginSignup = ({ onClose, onLogin }) => {
    const [isSignup, setIsSignup] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    // ========================================
    // HANDLE SUBMIT
    // ========================================

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage("");
        setMessageType("");

        // Remove extra spaces
        const cleanUsername = username.trim();
        const cleanEmail = email.trim().toLowerCase();

        // ========================================
        // BASIC VALIDATION
        // ========================================

        if (!cleanUsername) {
            setMessage("Please enter your username.");
            setMessageType("error");
            return;
        }

        if (!isSignup && !cleanEmail) {
            setMessage("Please enter your email.");
            setMessageType("error");
            return;
        }

        if (isSignup && !cleanEmail) {
            setMessage("Please enter your email.");
            setMessageType("error");
            return;
        }

        if (!password) {
            setMessage("Please enter your password.");
            setMessageType("error");
            return;
        }

        if (password.length < 6) {
            setMessage(
                "Password must be at least 6 characters."
            );
            setMessageType("error");
            return;
        }

        // ========================================
        // SIGN UP
        // ========================================

        if (isSignup) {
            const existingUser =
                JSON.parse(
                    localStorage.getItem("swiftEatsUser")
                );

            if (
                existingUser &&
                existingUser.email === cleanEmail
            ) {
                setMessage(
                    "An account with this email already exists."
                );
                setMessageType("error");
                return;
            }

            const newUser = {
                username: cleanUsername,
                email: cleanEmail,
                password: password,
            };

            localStorage.setItem(
                "swiftEatsUser",
                JSON.stringify(newUser)
            );

            setMessage(
                "Account created successfully! Please login."
            );
            setMessageType("success");

            // Switch to Login
            setIsSignup(false);

            // Clear fields
            setPassword("");

            return;
        }

        // ========================================
        // LOGIN
        // ========================================

        const savedUser =
            JSON.parse(
                localStorage.getItem("swiftEatsUser")
            );

        if (!savedUser) {
            setMessage(
                "No account found. Please sign up first."
            );
            setMessageType("error");
            return;
        }

        if (
            savedUser.email !== cleanEmail ||
            savedUser.password !== password
        ) {
            setMessage(
                "Invalid email or password."
            );
            setMessageType("error");
            return;
        }

        // ========================================
        // LOGIN SUCCESS
        // ========================================

        const loggedInUser = {
            username: savedUser.username,
            email: savedUser.email,
        };

        localStorage.setItem(
            "swiftEatsLoggedIn",
            JSON.stringify(loggedInUser)
        );

        setMessage(
            `Welcome back, ${savedUser.username}!`
        );
        setMessageType("success");

        // Tell Header login was successful
        if (onLogin) {
            onLogin(loggedInUser);
        }

        // Close popup after successful login
        setTimeout(() => {
            onClose();
        }, 800);
    };

    // ========================================
    // SWITCH LOGIN / SIGNUP
    // ========================================

    const handleToggle = () => {
        setIsSignup(!isSignup);

        setUsername("");
        setEmail("");
        setPassword("");

        setMessage("");
        setMessageType("");
    };

    return (
        <div className="login-container">

            <div className="form-container">

                {/* =================================
                    CLOSE BUTTON
                ================================= */}

                <button
                    className="close-btn"
                    onClick={onClose}
                    type="button"
                >
                    ×
                </button>

                {/* =================================
                    HEADER
                ================================= */}

                <div className="auth-header">

                    <h2>
                        {isSignup
                            ? "Create Account"
                            : "Welcome Back!"}
                    </h2>

                    <p>
                        {isSignup
                            ? "Sign up to start ordering delicious food."
                            : "Login to continue ordering your favorite food."}
                    </p>

                </div>

                {/* =================================
                    FORM
                ================================= */}

                <form onSubmit={handleSubmit}>

                    {/* USERNAME */}

                    <div className="input-group">

                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                        />

                    </div>

                    {/* EMAIL */}

                    <div className="input-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                    </div>

                    {/* PASSWORD */}

                    <div className="input-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                        />

                    </div>

                    {/* MESSAGE */}

                    {message && (
                        <p
                            className={`auth-message ${messageType}`}
                        >
                            {message}
                        </p>
                    )}

                    {/* SUBMIT BUTTON */}

                    <button
                        className="auth-btn"
                        type="submit"
                    >
                        {isSignup
                            ? "Create Account"
                            : "Login"}
                    </button>

                </form>

                {/* =================================
                    TOGGLE
                ================================= */}

                <div className="toggle-container">

                    <span>
                        {isSignup
                            ? "Already have an account?"
                            : "Don't have an account?"}
                    </span>

                    <button
                        className="toggle-btn"
                        onClick={handleToggle}
                        type="button"
                    >
                        {isSignup
                            ? "Login"
                            : "Sign Up"}
                    </button>

                </div>

            </div>

        </div>
    );
};

export default LoginSignup;