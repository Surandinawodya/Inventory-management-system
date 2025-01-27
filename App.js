import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <div>
          <img src="lo.jpg" alt="logo" className="logo" />
        </div>
        <ul className="nav-list">
          <li><a href="home.html">Home</a></li>
          <li><a href="home.html">Dashboard</a></li>
          <li><a href="ContactUs.html">Contact Us</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="index.html">Login</a></li>
        </ul>
      </header>

      <section className="hero">
        <h1>Get in Touch with Our Support Team</h1>
        <p>Need assistance with equipment inventory or have questions about our system? We're here to help.</p>
      </section>

      <main>
        <div className="contact-container">
          <div className="contact-header">
            <p>Fill out the form below to reach our support team. We'll respond promptly to address your concerns.</p>
          </div>

          <form className="contact-form" action="submit_contact.php" method="POST">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Write your message here" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hospital Inventory Management</h3>
            <p>Streamlining hospital inventory for efficient and reliable healthcare delivery.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Access</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="about.html">Dashboard</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="ContactUs.html">About Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get in Touch</h3>
            <ul>
              <li>Email: companyname@gmail.com</li>
              <li>Phone: +94 78 345 2345</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
