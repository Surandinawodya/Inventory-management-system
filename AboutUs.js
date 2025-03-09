import React from "react";
import "../components/about.css"; // Make sure to add the relevant CSS here.
import heroImage from "./assets/image9.jpg"; // Adjust if it's in an 'assets' folder
import Header from '../components/Header';
import Footer from '../components/Footer';


function App() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      
      <section className="hero-ab"style={{
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

      <Footer />
    </div>
  );
}

export default App;
