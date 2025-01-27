import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign-in Form */}
          <form className="sign-in-form">
            <h2 className="title">Sign-in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <img src="/Images/fb.svg" alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src="/Images/tw.svg" alt="Twitter" />
              </a>
              <a href="#" className="social-icon">
                <img src="/Images/li.svg" alt="LinkedIn" />
              </a>
            </div>
          </form>

          {/* Sign-up Form */}
          <form className="sign-up-form">
            <h2 className="title">Sign-Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-user-tag"></i>
              <select required>
                <option value="" disabled selected>Select Role</option>
                <option value="admin">Admin</option>
                <option value="hs1">Hospital 01</option>
                <option value="hs2">Hospital 02</option>
              </select>
            </div>
            <input type="submit" value="Sign up" className="btn solid" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <img src="/Images/fb.svg" alt="Facebook" />
              </a>
              <a href="#" className="social-icon">
                <img src="/Images/tw.svg" alt="Twitter" />
              </a>
              <a href="#" className="social-icon">
                <img src="/Images/li.svg" alt="LinkedIn" />
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Panels Container */}
      <div className="panels-container">
        {/* Left Panel */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Welcome to the hospital inventory management system, your one-stop solution for managing medical supplies seamlessly.</p>
            <button
              className="btn-transparent"
              onClick={() => setSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          <img src="/Images/doctor.svg" className="image" alt="Doctor" />
        </div>

        {/* Right Panel */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Already have an account? Sign in to continue managing hospital inventories effortlessly. Log in now to take full advantage of our features and contribute to effective hospital operations!</p>
            <button
              className="btn-transparent"
              onClick={() => setSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
          <img src="/Images/medicine.svg" className="image" alt="Medicine" />
        </div>
      </div>
    </div>
  );
};

export default App;
