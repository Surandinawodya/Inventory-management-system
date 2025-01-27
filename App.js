import React, { useState } from "react";
import "./App.css";

const Header = () => (
  <header className="header5">
    <div>
      <img src="logo.jpg" alt="logo" width="50" height="30" />
    </div>
    <div className="header5-right">
      <ul className="nav-list">
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="ContactUs.html">Contact Us</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </div>
  </header>
);

const DashboardHeader = () => (
  <div className="dashboard-header">
    <h1>Supplier Details Management</h1>
  </div>
);

const TaskManager = () => {
  const [suppliers, setSuppliers] = useState([
    { id: "SUP001", name: "Supplier 01", email: "green.supplies@example.com", address: "123 Elm Street, New York" },
    { id: "SUP002", name: "Supplier 02", email: "blue.ocean@example.com", address: "45 Pine Avenue, Los Angeles" },
    { id: "SUP003", name: "Supplier 03", email: "eco.goods@example.com", address: "78 Maple Drive, Chicago" },
    { id: "SUP004", name: "Supplier 04", email: "sunrise.ent@example.com", address: "12 Sunrise Blvd, Miami" },
    { id: "SUP005", name: "Supplier 05", email: "pure.essentials@example.com", address: "90 Willow Way, Seattle" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newSupplier, setNewSupplier] = useState({ name: "", email: "", address: "" });

  const addSupplier = () => {
    const newId = `SUP${Math.floor(Math.random() * 10000).toString().padStart(3, "0")}`;
    setSuppliers([...suppliers, { id: newId, ...newSupplier }]);
    setNewSupplier({ name: "", email: "", address: "" });
  };

  const filteredSuppliers = suppliers.filter((supplier) =>
    Object.values(supplier).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="task-manager">
      <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Supplier Name"
            value={newSupplier.name}
            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newSupplier.email}
            onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={newSupplier.address}
            onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
            required
          />
          <button type="button" className="add-btn" onClick={addSupplier}>
            Add Supplier
          </button>
        </form>
        <input
          type="text"
          id="search-bar"
          placeholder="Search Supplier..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section id="employees">
        <table>
          <thead>
            <tr>
              <th>Supplier ID</th>
              <th>Supplier Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.address}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn" onClick={() => setSuppliers(suppliers.filter(s => s.id !== supplier.id))}>Delete</button>
                </td>
                <td><button className="delete-btn">Upload Report</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Hospital Inventory Management</h3>
        <p>Streamlining hospital inventory for efficient and reliable healthcare delivery.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Access</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="about.html">Dashboard</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="ContactUs.html">About Us</a></li>
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
);

const App = () => (
  <div className="app">
    <Header />
    <DashboardHeader />
    <TaskManager />
    <Footer />
  </div>
);

export default App;
