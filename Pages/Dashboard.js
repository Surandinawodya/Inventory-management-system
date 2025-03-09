import React, { useState, useEffect } from "react";
import '../components/Admin.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [repairDetails, setRepairDetails] = useState([]);

  useEffect(() => {
    const fetchRepairDetails = async () => {
      try {
        const response = await fetch("http://localhost/react_backend/fetch_requests1.php");
        const data = await response.json();
        setRepairDetails(data);
      } catch (error) {
        console.error("Error fetching repair details:", error);
      }
    };
    fetchRepairDetails();
  }, []);

  return (
    <div className="dashboard-container-admin">
      <aside className="sidebar">
        <div className="logo">Inventory</div>
        <nav className="nav">
          <ul>
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/ItemUser">Item Management</Link></li>
            <li><Link to="/Order">Re-order Management</Link></li>
            <li><Link to="/SupUser">Suppliers</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Login">Logout</Link></li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-bar">
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="user-profile">
            <span>User</span>
            <img src="/user.jpg" alt="Profile" className="profile-pic" />
          </div>
        </header>
        <br />

        <div className="dashboard-content">
          <div className="summary-cards">
            <div className="card"><h3>13</h3><p>To repair</p></div>
            <div className="card"><h3>1</h3><p>Fixed</p></div>
            <div className="card"><h3>3</h3><p>Exchange</p></div>
            <div className="card"><h3>4</h3><p>TO BE INVOICED</p></div>
          </div>

          <div className="details-section">
            <h4>Repair Details</h4>
            <table>
              <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Repair State</th>
                </tr>
              </thead>
              <tbody>
                {repairDetails.length === 0 ? (
                  <tr><td colSpan="2">No repair requests found.</td></tr>
                ) : (
                  repairDetails.map((repair) => (
                    <tr key={repair.id}>
                      <td>{repair.item_type}</td>
                      <td>{repair.repair_state}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
