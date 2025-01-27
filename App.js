import React from "react";
import "./App.css";

const App = () => {
  const searchEmployees = (e) => {
    const filter = e.target.value.toLowerCase();
    const rows = document.querySelectorAll("#employee-table-body tr");

    rows.forEach((row) => {
      const cells = row.getElementsByTagName("td");
      const rowText = Array.from(cells)
        .map((cell) => cell.textContent.toLowerCase())
        .join(" ");
      row.style.display = rowText.includes(filter) ? "" : "none";
    });
  };

  return (
    <div>
      <header className="header5">
        <div>
          <img src="logo.jpg" alt="logo" width="50px" height="30px" />
        </div>
        <div className="header5-right">
          <div className="hamburger" onClick={() => {}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
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
      <div className="dashboard-header">
        <h1 style={{ fontSize: "40px", color: "#63075b", textAlign: "center", marginBottom: "20px" }}>
          Supplier Dashboard
        </h1>
      </div>
      <div className="task-manager">
        <div className="form-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Search Your Name..."
            onKeyUp={searchEmployees}
          />
        </div>
        <section id="employees">
          <table>
            <thead>
              <tr>
                <th>Supplier ID</th>
                <th>Supplier Name</th>
                <th>View Performance</th>
              </tr>
            </thead>
            <tbody id="employee-table-body">
              {["SUP001", "SUP002", "SUP003", "SUP004", "SUP005"].map((id, index) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>Supplier {index + 1}</td>
                  <td>
                    <button className="delete-btn">Download</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hospital Inventory Management</h3>
            <p>Streamlining hospital inventory for efficient and reliable healthcare delivery.</p>
          </div>
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
};

export default App;
