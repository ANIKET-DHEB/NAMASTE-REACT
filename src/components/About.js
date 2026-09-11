import {
  FaArrowRight,
  FaBolt,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaUtensils,
} from "react-icons/fa";

import "../styles/About.css";

const About = () => {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">
            <FaUtensils />
            ABOUT SWIFTEATS
          </span>

          <h1>
            Good Food.
            <br />
            <span>Good Mood.</span>
          </h1>

          <p>
            We make it easy to discover delicious food from your
            favorite restaurants and get it delivered straight to
            your doorstep.
          </p>

          <div className="about-hero-points">
            <div>
              <FaCheckCircle />
              <span>Fresh & Quality Food</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Fast Delivery</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Easy Ordering</span>
            </div>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="hero-circle"></div>

          <div className="hero-food-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=700&auto=format&fit=crop&q=80"
              alt="Delicious food"
            />

            <div className="hero-food-info">
              <div>
                <strong>Fresh & Delicious</strong>
                <span>Delivered with care</span>
              </div>

              <div className="hero-rating">
                ★ 4.8
              </div>
            </div>
          </div>

          <div className="floating-card delivery-card">
            <FaMotorcycle />
            <div>
              <strong>Fast Delivery</strong>
              <span>At your doorstep</span>
            </div>
          </div>

          <div className="floating-card location-card">
            <FaMapMarkerAlt />
            <div>
              <strong>Mumbai</strong>
              <span>Delivering happiness</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="about-story section-container">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80"
            alt="Delicious food served on a table"
          />

          <div className="story-experience">
            <strong>5+</strong>
            <span>Years of<br />Food Passion</span>
          </div>
        </div>

        <div className="story-content">
          <span className="section-label">OUR STORY</span>

          <h2>
            We believe great food
            <span> brings people together.</span>
          </h2>

          <p>
            SwiftEats was created with one simple idea — ordering
            great food should be quick, convenient and enjoyable.
          </p>

          <p>
            We connect food lovers with amazing restaurants and
            help them discover meals they will love. From a quick
            lunch to a special dinner, SwiftEats makes every order
            simple from start to finish.
          </p>

          <div className="story-highlights">

            <div className="story-highlight">
              <div className="highlight-icon">
                <FaHeart />
              </div>

              <div>
                <h4>Made With Passion</h4>
                <p>
                  We care about every part of your food journey.
                </p>
              </div>
            </div>

            <div className="story-highlight">
              <div className="highlight-icon">
                <FaBolt />
              </div>

              <div>
                <h4>Built For Speed</h4>
                <p>
                  Simple ordering and quick doorstep delivery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY SWIFTEATS ================= */}
      <section className="why-section">

        <div className="section-heading">
          <span className="section-label">WHY SWIFTEATS?</span>

          <h2>
            Everything you need for
            <span> a better food experience.</span>
          </h2>

          <p>
            We focus on making every step of your food order
            convenient, reliable and enjoyable.
          </p>
        </div>

        <div className="why-grid section-container">

          <div className="why-card">
            <div className="why-icon">
              <FaUtensils />
            </div>

            <h3>Quality Food</h3>

            <p>
              Discover delicious meals from carefully selected
              restaurants and food partners.
            </p>

            <span className="card-number">01</span>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaMotorcycle />
            </div>

            <h3>Fast Delivery</h3>

            <p>
              Our delivery experience is designed to get your
              favorite meals to you quickly and safely.
            </p>

            <span className="card-number">02</span>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaHeart />
            </div>

            <h3>Made For You</h3>

            <p>
              Explore different cuisines and find food that
              matches your cravings and mood.
            </p>

            <span className="card-number">03</span>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaClock />
            </div>

            <h3>Simple Experience</h3>

            <p>
              From choosing your meal to tracking your order,
              everything stays simple and convenient.
            </p>

            <span className="card-number">04</span>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-item">
            <strong>100+</strong>
            <span>Restaurant Partners</span>
          </div>

          <div className="stat-item">
            <strong>10K+</strong>
            <span>Happy Customers</span>
          </div>

          <div className="stat-item">
            <strong>25K+</strong>
            <span>Orders Delivered</span>
          </div>

          <div className="stat-item">
            <strong>30 min</strong>
            <span>Average Delivery</span>
          </div>

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team-section">

        <div className="section-heading">
          <span className="section-label">THE PEOPLE BEHIND SWIFTEATS</span>

          <h2>
            Meet the team
            <span> behind the experience.</span>
          </h2>

          <p>
            A passionate team working together to make food
            ordering faster, easier and more enjoyable.
          </p>
        </div>

        <div className="team-grid section-container">

          <div className="team-card">
            <div className="team-image">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
                alt="Ian Dooley"
              />
            </div>

            <div className="team-info">
              <h3>Ian Dooley</h3>
              <span>Founder & CEO</span>
              <p>
                Building a better way for people to discover
                and enjoy great food.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80"
                alt="Joseph Gonzalez"
              />
            </div>

            <div className="team-info">
              <h3>Joseph Gonzalez</h3>
              <span>Head of Operations</span>
              <p>
                Making sure every order reaches customers
                smoothly and efficiently.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                alt="Aiony Haust"
              />
            </div>

            <div className="team-info">
              <h3>Aiony Haust</h3>
              <span>Marketing Manager</span>
              <p>
                Connecting food lovers with exciting restaurants
                and new experiences.
              </p>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80"
                alt="Michael Dam"
              />
            </div>

            <div className="team-info">
              <h3>Michael Dam</h3>
              <span>Customer Support Lead</span>
              <p>
                Helping customers have a smooth and enjoyable
                SwiftEats experience.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">

        <div className="about-cta-content">

          <div>
            <span className="section-label">READY TO ORDER?</span>

            <h2>
              Your next favorite meal
              <span> is just a click away.</span>
            </h2>

            <p>
              Explore restaurants, discover something delicious
              and let SwiftEats bring it to you.
            </p>
          </div>

          <a href="/" className="about-cta-button">
            Explore Food
            <FaArrowRight />
          </a>

        </div>

      </section>

    </main>
  );
};

export default About;