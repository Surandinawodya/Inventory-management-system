
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div>
          <img src="lo.jpg" alt="logo" />
        </div>
        <ul className="nav-list">
          <li><a href="home.html">Home</a></li>
          <li><a href="home.html">Dashboard</a></li>
          <li><a href="ContactUs.html">Contact Us</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="index.html">Login</a></li>
        </ul>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Request an Order for Inventory Management</h1>
        <p>Submit your order request to ensure seamless management of biomedical equipment and supplies.</p>
      </section>

      {/* Main Content */}
      <main>
        <div className="request-container">
          <div className="request-header">
            <p>Complete the form below to place your order or request services. Our team will process your request promptly.</p>
          </div>

          <form className="request-form" action="submit_order_request.php" method="POST">
            <label htmlFor="request-type">Request Type</label>
            <select id="request-type" name="request_type" required>
              <option value="" disabled selected>Select request type</option>
              <option value="repair_state">Repair State</option>
              <option value="hospital_to_hospital">Hospital to Hospital</option>
              <option value="hospital_to_supplier">Hospital to Supplier</option>
            </select>

            <label htmlFor="hospital">Hospital</label>
            <select id="hospital" name="hospital" required>
              <option value="" disabled selected>Select the hospital</option>
              <option value="hospital1">Hospital 1</option>
              <option value="hospital2">Hospital 2</option>
            </select>

            <label htmlFor="item-type">Type of Item</label>
            <input type="text" id="item-type" name="item_type" placeholder="Enter the type of item (e.g., MRI scanner, ventilator)" required />

            <label htmlFor="description">Request Description</label>
            <textarea id="description" name="description" placeholder="Provide details about the request (e.g., repair issues or item requirements)" required></textarea>

            <label htmlFor="date">Request Date</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="contact">Contact Information</label>
            <input type="text" id="contact" name="contact" placeholder="Enter your contact details (e.g., phone number, email)" required />

            <button type="submit">Submit Request</button>
          </form>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Zen HR</h3>
            <p>Your trusted partner in providing quality services and solutions for all your needs.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Access</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="ContactUs.html">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get in Touch</h3>
            <ul>
              <li>Email: companyname@gmail.com</li>
              <li>Phone: +94 78 345 2345</li>
              <li>
                Follow Us:
                <a href="#"><img src="facebook.png" alt="Facebook" /></a>
                <a href="#"><img src="twitter.png" alt="Twitter" /></a>
                <a href="#"><img src="linkedin.png" alt="LinkedIn" /></a>
                <a href="#"><img src="instagram.png" alt="Instagram" /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

