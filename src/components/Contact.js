const Contact = () => {

  
  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>CONTACT US</h1>
      </div>
      <div className="contact-form-section">
        <h2>Get In Touch</h2>
        <p>We d love to hear from you! Fill out the form below and we ll get back to you as soon as possible.</p>
        
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-details">
        <div className="detail-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Location</h3>
          <p>123 Street, City, Country</p>
        </div>
        <div className="detail-card">
          <i className="fas fa-envelope"></i>
          <h3>Email Us</h3>
          <p>support@example.com</p>
        </div>
        <div className="detail-card">
          <i className="fas fa-phone"></i>
          <h3>Call Us</h3>
          <p>+123 456 7890</p>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509301!2d144.9537353153179!3d-37.8162797797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cf0e46d9038a!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1639533331343!5m2!1sen!2sau"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
