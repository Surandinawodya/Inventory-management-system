import React, { useState, useEffect } from "react"; 
import '../components/AdminRequest.css'; 
import Header from '../components/Header.js';

const AdminRequest = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch requests from the backend
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost/react_backend/fetch_requests.php");
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);  // Empty dependency array means this runs once when the component mounts

  const viewAllNotifications = () => {
    // Optional: If you want to mark all notifications as viewed, you can handle this in state or backend.
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header/>
      {/* Hero Section */}
      <section className="hero-re">
        <h1>Admin Request Notifications</h1>
      </section>

      {/* Notification Container */}
      <div className="notification-container">
        <div className="notification-header">
          <h2>Notifications</h2>
          <button onClick={viewAllNotifications}>View All</button>
        </div>
        <ul className="notification-list">
          {notifications.length === 0 ? (
            <p>No requests available.</p>
          ) : (
            notifications.map((notification) => (
              <li
                key={notification.id}
                className={`notification-item ${notification.isNew ? "new" : ""}`}
              >
                <h3>{notification.request_type}</h3>
                <p>Hospital: {notification.hospital}</p>
                <p>Item: {notification.item_type}</p>
                <p>Description: {notification.description}</p>
                <p>Date: {notification.request_date}</p>
                <p>Contact: {notification.contact}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminRequest;
