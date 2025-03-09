import React, { useState, useEffect, useRef } from "react";
import '../components/login.css'; // Import CSS file

import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import images
import fbIcon from "./assets/fb.svg";
import twIcon from "./assets/tw.svg";
import liIcon from "./assets/li.svg";
import doctorImage from "./assets/doctor.svg";
import medicineImage from "./assets/medicine.svg";

const Login = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({ username: "", email: "", password: "", role: "" });
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden"; 
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSignUpClick = () => { containerRef.current?.classList.add("sign-up-mode"); };
  const handleSignInClick = () => { containerRef.current?.classList.remove("sign-up-mode"); };

  const handleSignupChange = (e) => { setSignupData({ ...signupData, [e.target.name]: e.target.value }); };
  const handleLoginChange = (e) => { setLoginData({ ...loginData, [e.target.name]: e.target.value }); };

  // 🟢 Handle Sign-up
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost/react_backend/signup.php", signupData, {
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.data.success) {
        alert("Signup successful! Please log in.");
        handleSignInClick();
      } else {
        setError(response.data.message); // Show the backend error
      }
    } catch (error) {
      setError("Could not connect to the server. Make sure XAMPP is running.");
    }
  };

  // 🔵 Handle Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before new request
  
    try {
      const response = await axios.post("http://localhost/react_backend/login.php", loginData, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("Login Response:", response.data); // Debugging log
  
      if (response.data.success) {
        alert("Login successful!");
  
        // Save user details in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
  
        // Ensure role exists before navigating
        const userRole = response.data.user?.role;
        if (!userRole) {
          setError("User role not found. Contact admin.");
          return;
        }
  
        console.log("User role:", userRole); // Debug role
  
        // Redirect based on role
        switch (userRole) {
          case "admin":
            navigate("/admin");
            break;
          case "hs1":
            navigate("/dashboard");
            break;
          case "hs2":
            navigate("/dashboard");
            break;
          default:
            navigate("/");
            break;
        }
      } else {
        setError(response.data.message || "Invalid credentials. Try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError("Could not connect to the server. Ensure XAMPP is running.");
    }
  };

  return (
    <div ref={containerRef} className="container-lg">
      <div className="forms-container-lg">
        <div className="signin-signup">
          {/* Sign-in Form */}
          <form className="sign-in-form" onSubmit={handleLoginSubmit}>
  <h2 className="title">Sign-in</h2>
  
  {/* Display error message if login fails */}
  {error && <p className="error-message">{error}</p>}
  
  <div className="input-field">
    <i className="fas fa-user"></i>
    <input 
      type="text" 
      name="username" 
      placeholder="Username" 
      value={loginData.username} 
      onChange={handleLoginChange} 
      required 
    />
  </div>

  <div className="input-field">
    <i className="fas fa-lock"></i>
    <input 
      type="password" 
      name="password" 
      placeholder="Password" 
      value={loginData.password} 
      onChange={handleLoginChange} 
      required 
    />
  </div>

  <input type="submit" value="Login" className="btn solid" />

  <p className="social-text">Or Sign in with social platforms</p>
  <div className="social-media">
    <a href="#" className="social-icon"><img src={fbIcon} alt="Facebook" /></a>
    <a href="#" className="social-icon"><img src={twIcon} alt="Twitter" /></a>
    <a href="#" className="social-icon"><img src={liIcon} alt="LinkedIn" /></a>
  </div>
</form>


          {/* Sign-up Form */}
          <form className="sign-up-form" onSubmit={handleSignupSubmit}>
            <h2 className="title">Sign-Up</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="username" placeholder="Username" value={signupData.username} onChange={handleSignupChange} required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required />
            </div>
            <div className="input-field">
              <i className="fas fa-user-tag"></i>
              <select name="role" value={signupData.role} onChange={handleSignupChange} required>
                <option value="" disabled>Select Role</option>
                <option value="hs1">Hospital 01</option>
                <option value="hs2">Hospital 02</option>
              </select>
            </div>
            <input type="submit" value="Sign up" className="btn solid" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><img src={fbIcon} alt="Facebook" /></a>
              <a href="#" className="social-icon"><img src={twIcon} alt="Twitter" /></a>
              <a href="#" className="social-icon"><img src={liIcon} alt="LinkedIn" /></a>
            </div>
          </form>
        </div>
      </div>

      {/* Panels Container */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Welcome to the hospital inventory management system, your one-stop
              solution for managing medical supplies seamlessly.
            </p>
            <button className="btn-transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={doctorImage} className="image" alt="Doctor" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Already have an account? Sign in to continue managing hospital
              inventories effortlessly.
            </p>
            <button className="btn-transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src={medicineImage} className="image" alt="Medicine" />
        </div>
      </div>
    </div>
  );
};

export default Login;
