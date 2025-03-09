import React, { useState, useEffect } from "react";
import '../components/Admin.css';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [repairDetails, setRepairDetails] = useState([]);

  useEffect(() => {
    const fetchRepairDetails = async () => {
      try {
        const response = await fetch("http://localhost/react_backend/fetch_requests1.php");
        const data = await response.json();
        setRepairDetails(data);  // This will set the fetched data including the repair_state
      } catch (error) {
        console.error("Error fetching repair details:", error);
      }
    };
    fetchRepairDetails();
  }, []);

  const handleRepairStateChange = async (id, newState) => {
    try {
      const response = await fetch("http://localhost/react_backend/update_repair_state.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, repair_state: newState })
      });

      const result = await response.json();

      if (response.ok) {
        // After successfully updating, no need to reset the value to 'pending'.
        setRepairDetails(repairDetails.map(repair =>
          repair.id === id ? { ...repair, repair_state: newState } : repair
        ));
        alert(result.message);
      } else {
        console.error(result.message || "Failed to update repair state.");
        alert(result.message || "Failed to update repair state.");
      }
    } catch (error) {
      console.error("Error updating repair state:", error);
      alert("An error occurred while updating the repair state.");
    }
  };

  return (
    <div className="dashboard-container-admin">
      <aside className="sidebar">
        <div className="logo">Inventory</div>
        <nav className="nav">
          <ul>
            <li><Link to="/Admin">Dashboard</Link></li>
            <li><Link to="/ItemAdmin">Item Management</Link></li>
            <li><Link to="/AdminRequest">Re-Order Management</Link></li>
            <li><Link to="/SupAdmin">Suppliers</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Login">Logout</Link></li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-bar">
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="user-profile">
            <span>Admin</span>
            <img src="/user.jpg" alt="Profile" className="profile-pic" />
          </div>
        </header>

        <div className="dashboard-content">
          <div className="details-section">
            <h4>Repair Details</h4>
            <table>
              <thead>
                <tr>
                  <th>Hospital</th>
                  <th>Equipment</th>
                  <th>Request Date</th>
                  <th>Description</th>
                  <th>Update State</th>
                </tr>
              </thead>
              <tbody>
                {repairDetails.length === 0 ? (
                  <tr>
                    <td colSpan="5">No repair requests found.</td>
                  </tr>
                ) : (
                  repairDetails.map((repair) => (
                    <tr key={repair.id}>
                      <td>{repair.hospital}</td>
                      <td>{repair.item_type}</td>
                      <td>{repair.request_date}</td>
                      <td>{repair.description}</td>
                      <td>
                        <select
                          value={repair.repair_state} // Set value to current repair state from the database
                          onChange={(e) => handleRepairStateChange(repair.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="in progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
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

export default Admin;
