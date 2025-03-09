import React from "react";
import Header from "../components/Header"; // Assuming the Header component is in the correct path
import Footer from '../components/Footer'; // Assuming the Footer component is in the correct path

const App = () => {
  return (
    <div style={appStyle}>
      <Header /> {/* Properly include the Header component here */}
      
      <div style={mainContentStyle}>
        <div style={contentWrapperStyle}>
          <img
            src="/p2.png"
            alt="Biomedical Inventory"
            style={imageStyle}
          />
          <div style={descriptionStyle}>
            <h2>Welcome to the Hospital Inventory Management System</h2>
            <p>
              Our platform is designed to streamline the management of
              biomedical inventory, ensuring accurate tracking and efficient
              workflows. Whether you're an admin managing inventory or a
              user requesting items, we provide intuitive tools to make your
              job easier. Explore our dashboards, manage inventory, and stay
              organized.
            </p>
          </div>
        </div>

        <div style={socialMediaWrapperStyle}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialMediaIconStyle}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialMediaIconStyle}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialMediaIconStyle}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialMediaIconStyle}
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <Footer /> {/* Properly include the Footer component here */}
    </div>
  );
};

const appStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "white",
};

const contentWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const imageStyle = {
  width: "100%",
  maxWidth: "430px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.0)",
};

const descriptionStyle = {
  maxWidth: "600px",
  textAlign: "left",
};

const mainContentStyle = {
  padding: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#edd4f7",
  borderRadius: "15px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const socialMediaWrapperStyle = {
  marginTop: "30px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const socialMediaIconStyle = {
  fontSize: "24px",
  color: "#63085b",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

socialMediaIconStyle[":hover"] = {
  color: "black",
};

export default App;
