import React from "react";
import "./header.css"; // Import global styles
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="lo.jpg" alt="logo" className="logo2" />
        <h1 className="header-title">Hospital Inventory Management</h1>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>{" "}
        {/* Use Link here */}
        <li>
          <Link to="/AboutUs">About</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </header>
  );
}
