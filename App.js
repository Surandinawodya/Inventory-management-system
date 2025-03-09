import React from "react";
import "../components/profile.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div>
        <Header />
       {/* Main Content */}
      <div className="container-prof">
        <h1>User Profile</h1>
        {/* Profile Card */}
        <div className="card-prof">
          <div className="profile-header">
            <img src="user1.png" alt="Profile Picture" className="profile-picture" />
          </div>
          <div className="card-body">
            <p className="p1">
              <strong>Full Name:</strong> Dr.K.R.S.Rohini
            </p>
            <p className="p1">
              <strong>Email:</strong> rohini12@gmail.com
            </p>
            <p className="p1">
              <strong>Role:</strong> Biomedical Engineer
            </p>
          </div>
        </div>
      </div>

     <Footer/>
    </div>
  );
};

export default Profile;


