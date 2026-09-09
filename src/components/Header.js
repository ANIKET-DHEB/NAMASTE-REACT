import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaShoppingCart,
    FaUser,
} from "react-icons/fa";

import LoginSignup from "./LoginSignup";
import { useCart } from "./CartContext";

import "../styles/Header.css";

const Header = () => {

    // ========================================
    // CART
    // ========================================

    const { cartCount } = useCart();

    // ========================================
    // AUTH STATE
    // ========================================

    const [isLoginVisible, setIsLoginVisible] =
        useState(false);

    const [loggedInUser, setLoggedInUser] =
        useState(null);

    const [menuOpen, setMenuOpen] =
        useState(false);

    // ========================================
    // LOAD LOGGED-IN USER
    // ========================================

    useEffect(() => {

        try {

            const savedUser =
                localStorage.getItem(
                    "swiftEatsLoggedIn"
                );

            if (savedUser) {

                setLoggedInUser(
                    JSON.parse(savedUser)
                );

            }

        } catch (error) {

            console.error(
                "Failed to load logged-in user:",
                error
            );

            localStorage.removeItem(
                "swiftEatsLoggedIn"
            );

        }

    }, []);

    // ========================================
    // LOGIN SUCCESS
    // ========================================

    const handleLogin = (user) => {

        // Save user
        localStorage.setItem(
            "swiftEatsLoggedIn",
            JSON.stringify(user)
        );

        // Update header immediately
        setLoggedInUser(user);

        // Close login modal
        setIsLoginVisible(false);

        // Close mobile menu
        setMenuOpen(false);

    };

    // ========================================
    // LOGIN / LOGOUT
    // ========================================

    const handleAuthClick = () => {

        // ------------------------------------
        // LOGOUT
        // ------------------------------------

        if (loggedInUser) {

            const confirmLogout =
                window.confirm(
                    "Are you sure you want to logout?"
                );

            if (!confirmLogout) {
                return;
            }

            // Remove saved login
            localStorage.removeItem(
                "swiftEatsLoggedIn"
            );

            // Reset state
            setLoggedInUser(null);

            setIsLoginVisible(false);

            setMenuOpen(false);

            return;
        }

        // ------------------------------------
        // LOGIN
        // ------------------------------------

        setIsLoginVisible(true);

        setMenuOpen(false);

    };

    // ========================================
    // CLOSE MENU
    // ========================================

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* =================================
                HEADER
            ================================= */}

            <header className="header">

                <div className="header-container">

                    {/* =================================
                        LOGO
                    ================================= */}

                    <div className="logo-container">

                        <Link
                            to="/"
                            className="logo"
                            onClick={closeMenu}
                        >
                            SwiftEats
                        </Link>

                    </div>


                    {/* =================================
                        HAMBURGER
                    ================================= */}

                    <button
                        className="hamburger"
                        type="button"
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>


                    {/* =================================
                        NAVIGATION
                    ================================= */}

                    <nav
                        className={`nav-items ${
                            menuOpen ? "active" : ""
                        }`}
                    >

                        {/* HOME */}

                        <Link
                            to="/"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>


                        {/* ABOUT */}

                        <Link
                            to="/about"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            About Us
                        </Link>


                        {/* CONTACT */}

                        <Link
                            to="/contact"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Contact Us
                        </Link>


                        {/* MY ORDERS */}

                        <Link
                            to="/my-orders"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            My Orders
                        </Link>


                        {/* =================================
                            CART
                        ================================= */}

                        <Link
                            to="/cart"
                            className="cart-nav-link"
                            onClick={closeMenu}
                        >

                            <span className="cart-icon-wrapper">

                                <FaShoppingCart />

                                {cartCount > 0 && (
                                    <span className="cart-count">
                                        {cartCount}
                                    </span>
                                )}

                            </span>

                            <span>
                                Cart
                            </span>

                        </Link>


                        {/* =================================
                            USER + LOGIN / LOGOUT
                        ================================= */}

                        <div className="auth-area">

                            {loggedInUser && (
                                <span className="user-name">

                                    <FaUser />

                                    <span>
                                        Hi,{" "}
                                        {loggedInUser.username}
                                    </span>

                                </span>
                            )}

                            <button
                                className="loginbtn"
                                type="button"
                                onClick={handleAuthClick}
                            >
                                {loggedInUser
                                    ? "Logout"
                                    : "Login"}
                            </button>

                        </div>

                    </nav>

                </div>

            </header>


            {/* =================================
                LOGIN / SIGNUP MODAL
            ================================= */}

            {isLoginVisible && (

                <LoginSignup
                    onLogin={handleLogin}
                    onClose={() =>
                        setIsLoginVisible(false)
                    }
                />

            )}

        </>
    );
};

export default Header;