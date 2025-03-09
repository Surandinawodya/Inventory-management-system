import React from "react";
import "./footer.css";

export default function Footer() {
  return (
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
  );
}
