import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ==============================
          FOOTER MAIN
      ============================== */}
      <div className="footer-container">

        {/* BRAND SECTION */}
        <div className="footer-brand">
          <h2>Swift<span>Eats</span></h2>

          <p>
            Delicious food, delivered fast.
            Discover your favorite restaurants
            and enjoy every bite.
          </p>

          <div className="footer-social">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>


        {/* ==============================
            COMPANY LINKS
        ============================== */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#">Who We Are</a>
          <a href="#">Blog</a>
          <a href="#">Work With Us</a>
          <a href="#">Investor Relations</a>
          <a href="#">Contact Us</a>
        </div>


        {/* ==============================
            EXPLORE LINKS
        ============================== */}
        <div className="footer-column">
          <h3>Explore</h3>

          <a href="#">SwiftEats</a>
          <a href="#">Restaurants</a>
          <a href="#">Popular Food</a>
          <a href="#">Top Rated</a>
          <a href="#">Offers</a>
        </div>


        {/* ==============================
            RESTAURANTS
        ============================== */}
        <div className="footer-column">
          <h3>For Restaurants</h3>

          <a href="#">Partner With Us</a>
          <a href="#">Restaurant Login</a>
          <a href="#">Business Support</a>
          <a href="#">Apps For You</a>
        </div>


        {/* ==============================
            SUPPORT
        ============================== */}
        <div className="footer-column">
          <h3>Support</h3>

          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Terms</a>
          <a href="#">Help & Support</a>
          <a href="#">Report an Issue</a>
        </div>


        {/* ==============================
            APP SECTION
        ============================== */}
        <div className="footer-app">

          <h3>Get the App</h3>

          <p>
            Order your favorite food anytime,
            anywhere.
          </p>

          <div className="store-buttons">

            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://ci3.googleusercontent.com/meips/ADKq_Nb3K_tyUQe5MJXq5TBbkdaPEqtXrdx4s9uorYLmo9huzT4rm90pNvfQ1b9xHBvrhCLEUUUTw3M9s4lohvyz5NVd9E8DT7ISkQbQc4Di_FDKjweYu5I=s0-d-e1-ft#https://static.licdn.com/aero-v1/sc/h/76yzkd0h5kiv27lrd4yaenylk"
                alt="Download on the App Store"
              />
            </a>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>

          </div>
        </div>

      </div>


      {/* ==============================
          FOOTER DIVIDER
      ============================== */}
      <div className="footer-divider"></div>


      {/* ==============================
          FOOTER BOTTOM
      ============================== */}
      <div className="footer-bottom">

        <p>
          © 2026 SwiftEats. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;