import React from "react";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <nav className="navbar">
        <div className="logo">GiftLink</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Welcome to GiftLink</h1>
          <p>
            A community-driven platform where people can share unused items,
            discover meaningful gifts, and support others through generosity.
          </p>
          <a href="#about" className="get-started-btn">
            Get Started
          </a>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          GiftLink helps users give away items they no longer need and allows
          others to find useful gifts for free. Our goal is to reduce waste,
          encourage sharing, and build stronger communities.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To connect people through kindness by making it easy to donate and
              receive useful items.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To create a trusted online space where giving becomes simple,
              accessible, and meaningful.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Team</h3>
            <p>
              Our team is focused on building a helpful platform that supports
              users, communities, and sustainable living.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions about GiftLink? Contact our team using the form below
          or reach us directly through our contact details.
        </p>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> support@giftlink.com
          </p>
          <p>
            <strong>Phone:</strong> +27 11 123 4567
          </p>
          <p>
            <strong>Location:</strong> Johannesburg, South Africa
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 GiftLink. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainPage;
