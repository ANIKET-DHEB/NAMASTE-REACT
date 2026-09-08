import { useState } from "react";
import { Link } from "react-router-dom";
import LoginSignup from "./LoginSignup";
import "../styles/Header.css";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleLogin = () => {
        if (btnNameReact === "Login") {
            setIsLoginVisible(true);
        } else {
            setIsLoginVisible(false);
        }

        setBtnNameReact(
            btnNameReact === "Login" ? "Logout" : "Login"
        );

        setMenuOpen(false);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="header">

                <div className="header-container">

                    {/* Logo */}
                    <div className="logo-container">
                        <Link to="/" className="logo">
                            SwiftEats
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation */}
                    <nav className={`nav-items ${menuOpen ? "active" : ""}`}>
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>

                        <Link
                            to="/About"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            About Us
                        </Link>

                        <Link
                            to="/Contact"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Contact Us
                        </Link>

                        <button
                            className="loginbtn"
                            onClick={toggleLogin}
                        >
                            {btnNameReact}
                        </button>
                    </nav>

                </div>

            </header>

            {/* Login Modal */}
            {isLoginVisible && (
                <LoginSignup
                    onClose={() => {
                        setIsLoginVisible(false);
                        setBtnNameReact("Login");
                    }}
                />
            )}
        </>
    );
};

export default Header;