import React, { useState, useEffect } from "react";
import "../components/SupAdmin.css";

const SupAdmin = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newSupplier, setNewSupplier] = useState({ name: "", email: "", address: "" });

  // Fetch suppliers from backend
  useEffect(() => {
    fetch("http://localhost/react_backend/get_suppliers.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging
        setSuppliers(data);
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  // Add a new supplier
  const addSupplier = () => {
    if (!newSupplier.name || !newSupplier.email || !newSupplier.address) {
      alert("Please fill all fields.");
      return;
    }

    const newId = `SUP${Math.floor(Math.random() * 10000).toString().padStart(3, "0")}`;
    const supplierData = { supplier_id: newId, ...newSupplier };

    console.log("Sending Data:", supplierData); // Debugging

    fetch("http://localhost/react_backend/add_supplier.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(supplierData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setSuppliers((prevSuppliers) => [...prevSuppliers, supplierData]); // Update state immediately
          setNewSupplier({ name: "", email: "", address: "" });
        } else {
          console.error("Error adding supplier:", data.error);
          alert("Failed to add supplier. Check console for details.");
        }
      })
      .catch((error) => console.error("Fetch Error:", error));
  };

  // Delete a supplier
  const deleteSupplier = (supplier_id) => {
    fetch("http://localhost/react_backend/delete_supplier.php", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ supplier_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setSuppliers((prevSuppliers) =>
            prevSuppliers.filter((supplier) => supplier.supplier_id !== supplier_id)
          );
        } else {
          console.error("Error deleting supplier:", data.error);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  // Filter suppliers based on search term
  const filteredSuppliers = suppliers.filter((supplier) =>
    Object.values(supplier).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="task-manager">
      <h1>Supplier Management</h1>

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

      <section id="suppliers">
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
              <tr key={supplier.supplier_id}>
                <td>{supplier.supplier_id}</td>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.address}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn" onClick={() => deleteSupplier(supplier.supplier_id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button className="delete-btn">Upload Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default SupAdmin;
