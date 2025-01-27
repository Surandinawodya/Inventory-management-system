import React from "react";
import "./App.css"; // Make sure to add the relevant CSS here.
import heroImage from "./assets/image9.jpg"; // Adjust if it's in an 'assets' folder




function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="header5">
        <div>
          <img src="logo.jpg" alt="logo" width="50px" height="30px" />
        </div>
        <div className="header5-right">
          <ul className="nav-list">
            <li>
              <a href="home.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="ContactUs.html">Contact Us</a>
            </li>
            <li>
              <a href="login.html">Login</a>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      
      <section className="hero"style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
        }}>
        <div className="overlay">
          <h1>About Us</h1>
          <p>
            If you need further assistance with your Biomedical Inventory
            Management System, feel free to ask!.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <div className="text-content">
          <p>
            Welcome to <strong>BioInventory</strong>, the comprehensive solution
            for managing biomedical inventory with precision, efficiency, and
            reliability. We are committed to providing state-of-the-art tools
            to streamline inventory tracking, ensuring the optimal functioning
            of healthcare and research facilities.
          </p>

          <p>
            Our mission is to enhance healthcare and scientific advancements by
            simplifying inventory management. We aim to reduce downtime and
            ensure the availability of critical items by enabling efficient
            stock monitoring and control.
          </p>
        </div>
        <div className="profile">
          <img src="image icon.png" alt="Founder" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          {/* Footer Section 1 */}
          <div className="footer-section">
            <h3>Hospital Inventory Management</h3>
            <p>
              Streamlining hospital inventory for efficient and reliable
              healthcare delivery.
            </p>
          </div>

          {/* Footer Section 2 */}
          <div className="footer-section">
            <h3>Quick Access</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="about.html">Dashboard</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="ContactUs.html">About Us</a>
              </li>
            </ul>
          </div>

          {/* Footer Section 3 */}
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
}

export default App;
