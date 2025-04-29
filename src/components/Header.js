import { useState } from "react";
import { Link } from "react-router-dom";
import LoginSignup from "./LoginSignup";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const [isLoginVisible, setIsLoginVisible] = useState(false);

    const toggleLogin = () => {
        if (btnNameReact === "Login") {
            setIsLoginVisible(true);
        } else {
            setIsLoginVisible(false);
        }
        setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
    };

    return (
        <div className="header">
            <div className="header-container">
                <div className="logo-container">
                    <h3 className="logo">SwiftEats</h3>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/About" className="nav-link">About Us</Link></li>
                        <li><Link to="/Contact" className="nav-link">Contact Us</Link></li>
                        <button className="loginbtn" onClick={toggleLogin}>
                            {btnNameReact}
                        </button>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="textname">SwiftEats</h1>
                <h1 className="text">Discover the best food & drinks in Mumbai</h1>
            </div>

         
            {isLoginVisible && <LoginSignup onClose={() => setIsLoginVisible(false)} />}
        </div>
    );
};

export default Header;






