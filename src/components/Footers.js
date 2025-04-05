import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>SWIFTEATS</h2>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>ABOUT SWIFTEATS</h3>
            <a href="#">Who We Are</a>
            <a href="#">Blog</a>
            <a href="#">Work With Us</a>
            <a href="#">Investor Relations</a>
            <a href="#">Report Fraud</a>
            <a href="#">Press Kit</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="footer-column">
            <h3>SWIFTVERSE</h3>
            <a href="#">SwiftEats </a>
            <a href="#">Blinkit</a>
            <a href="#">District</a>
            <a href="#">Feeding India</a>
            <a href="#">Hyperpure</a>
            <a href="#">Swiggy</a>
            <a href="#">Zomaland</a>
            <a href="#">Weather Union</a>
          </div>

          <div className="footer-column">
            <h3>FOR RESTAURANTS</h3>
            <a href="#">Partner With Us</a>
            <a href="#">Apps For You</a>
          </div>

          <div className="footer-column">
            <h3>LEARN More</h3>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms</a>
          </div>

          <div className="footer-column social-links">
            <h3>SOCIAL LINKS</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="store-buttons">
            <a href="https://apps.apple.com/">
            <img  className="appicon"src="https://ci3.googleusercontent.com/meips/ADKq_Nb3K_tyUQe5MJXq5TBbkdaPEqtXrdx4s9uorYLmo9huzT4rm90pNvfQ1b9xHBvrhCLEUUUTw3M9s4lohvyz5NVd9E8DT7ISkQbQc4Di_FDKjweYu5I=s0-d-e1-ft#https://static.licdn.com/aero-v1/sc/h/76yzkd0h5kiv27lrd4yaenylk" alt="Download on the App Store" />
            </a>
              <a href="https://play.google.com/store">
             <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play"/>
             </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 
          2012-2025 © SWIFTEATS™ Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
