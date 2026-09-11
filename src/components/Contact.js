import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaUtensils,
} from "react-icons/fa";

import "../styles/Contact.css";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);

    event.target.reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            <FaHeadset />
            WE'RE HERE TO HELP
          </span>

          <h1>
            Let's talk about
            <span> your food journey.</span>
          </h1>

          <p>
            Have a question about your order, restaurant,
            delivery or SwiftEats? Our team is always happy
            to help.
          </p>

          <div className="contact-hero-points">

            <div>
              <FaCheckCircle />
              <span>Quick Support</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Friendly Team</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Here For You</span>
            </div>

          </div>

        </div>

        <div className="contact-hero-card">

          <div className="hero-card-icon">
            <FaUtensils />
          </div>

          <span>SWIFTEATS SUPPORT</span>

          <h3>
            Need help with
            <br />
            your order?
          </h3>

          <p>
            We're just a message away.
          </p>

          <div className="hero-support-status">
            <span className="status-dot"></span>
            Support team available
          </div>

        </div>

      </section>


      {/* ================= CONTACT DETAILS ================= */}

      <section className="contact-info-section">

        <div className="section-heading">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            We'd love to
            <span> hear from you.</span>
          </h2>

          <p>
            Whether you have a question, feedback or simply
            want to say hello, reach out to us through any
            of the options below.
          </p>

        </div>


        <div className="contact-details">

          <div className="contact-detail-card">

            <div className="detail-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <span>VISIT US</span>

              <h3>Our Location</h3>

              <p>
                Mumbai, Maharashtra, India
              </p>
            </div>

          </div>


          <div className="contact-detail-card">

            <div className="detail-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>EMAIL US</span>

              <h3>Send Us An Email</h3>

              <p>
                support@swifteats.com
              </p>
            </div>

          </div>


          <div className="contact-detail-card">

            <div className="detail-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <span>CALL US</span>

              <h3>Talk To Our Team</h3>

              <p>
                +91 98765 43210
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FORM + SUPPORT ================= */}

      <section className="contact-main section-container">

        <div className="contact-form-wrapper">

          <div className="form-heading">

            <span className="section-label">
              SEND A MESSAGE
            </span>

            <h2>
              How can we
              <span> help?</span>
            </h2>

            <p>
              Fill in the details below and our support team
              will get back to you as soon as possible.
            </p>

          </div>


          {formSubmitted && (
            <div className="success-message">
              <FaCheckCircle />

              <div>
                <strong>Message sent successfully!</strong>
                <span>
                  Thanks for reaching out. We'll get back to
                  you soon.
                </span>
              </div>
            </div>
          )}


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="contact-name">
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="contact-email">
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>


            <div className="form-group">

              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                placeholder="What can we help you with?"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
              <FaPaperPlane />
            </button>

          </form>

        </div>


        {/* ================= QUICK HELP ================= */}

        <aside className="quick-help">

          <div className="quick-help-top">

            <div className="quick-help-icon">
              <FaHeadset />
            </div>

            <span>QUICK SUPPORT</span>

          </div>


          <h3>
            Looking for
            <br />
            quick answers?
          </h3>

          <p>
            Here are some common things our customers ask
            about.
          </p>


          <div className="help-list">

            <div className="help-item">
              <FaCheckCircle />
              <span>Order and delivery support</span>
            </div>

            <div className="help-item">
              <FaCheckCircle />
              <span>Payment related questions</span>
            </div>

            <div className="help-item">
              <FaCheckCircle />
              <span>Restaurant information</span>
            </div>

            <div className="help-item">
              <FaCheckCircle />
              <span>Feedback and suggestions</span>
            </div>

          </div>


          <div className="support-hours">

            <FaClock />

            <div>
              <strong>Support Hours</strong>

              <span>
                Monday – Sunday · 9 AM – 10 PM
              </span>
            </div>

          </div>

        </aside>

      </section>


      {/* ================= LOCATION ================= */}

      <section className="location-section">

        <div className="location-content section-container">

          <div className="location-text">

            <span className="section-label">
              FIND US
            </span>

            <h2>
              Serving food lovers
              <span> across Mumbai.</span>
            </h2>

            <p>
              SwiftEats connects you with restaurants and
              delicious food from different parts of Mumbai.
            </p>

            <div className="location-badge">
              <FaMapMarkerAlt />
              <span>Mumbai, Maharashtra</span>
            </div>

          </div>


          <div className="map-wrapper">

            <iframe
              title="SwiftEats Mumbai Location"
              src="https://www.google.com/maps?q=Mumbai,Maharashtra,India&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="contact-cta">

        <div className="contact-cta-content">

          <div>

            <span className="section-label">
              SWIFTEATS
            </span>

            <h2>
              Great food is
              <span> better together.</span>
            </h2>

            <p>
              Explore your favorite restaurants and discover
              something delicious today.
            </p>

          </div>


          <a
            href="/"
            className="contact-cta-button"
          >
            Explore Food
            <FaArrowRight />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;