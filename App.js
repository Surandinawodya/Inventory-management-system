import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/order.css'; 
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';

const Order = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [hospital1Stock, setHospital1Stock] = useState('');
  const [hospital1Reorder, setHospital1Reorder] = useState('');
  const [stockMessage, setStockMessage] = useState('');
  const [inventory, setInventory] = useState([]);

  // Fetch inventory data from backend
  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get("http://localhost/react_backend/get_inventory.php");
      if (response.data.success) {
        setInventory(response.data.inventory);
      } else {
        console.error("Error fetching inventory:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  // Add new inventory item
  const handleUpdateStock = async () => {
    if (!itemName || !description || hospital1Stock === "" || hospital1Reorder === "") {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost/react_backend/add_inventory.php", {
        name: itemName,
        description,
        stockLevel: parseInt(hospital1Stock, 10),
        reorderLevel: parseInt(hospital1Reorder, 10),
      });

      if (response.data.success) {
        setStockMessage(`Inventory updated for "${itemName}".`);
        setItemName('');
        setDescription('');
        setHospital1Stock('');
        setHospital1Reorder('');
        fetchInventory(); // Refresh inventory table
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Delete inventory item
  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.post("http://localhost/react_backend/delete_inventory.php", { id });

      if (response.data.success) {
        alert("Item deleted successfully");
        fetchInventory(); // Refresh inventory list
      } else {
        alert("Error deleting item: " + response.data.message);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <Header/>

      {/* Add Item Stocks Section */}
      <div className="container-order">
        <div className="card">
          <div className="card-header">Add Item Stocks</div>
          <div className="card-body">
            <form id="updateStockForm" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="itemName">Item Name:</label>
              <input type="text" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} required />

              <label htmlFor="description">Description:</label>
              <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

              <label htmlFor="hospital1Stock">Stock Level:</label>
              <input type="number" id="hospital1Stock" value={hospital1Stock} onChange={(e) => setHospital1Stock(e.target.value)} min="0" required />

              <label htmlFor="hospital1Reorder">Reorder Level:</label>
              <input type="number" id="hospital1Reorder" value={hospital1Reorder} onChange={(e) => setHospital1Reorder(e.target.value)} min="0" required />

              <button type="button" onClick={handleUpdateStock}>Update Inventory</button>
            </form>
            <div id="stockMessage" className="message">{stockMessage}</div>
          </div>
        </div>
      </div>

      {/* Inventory Table Section */}
      <div className="container-order">
        <div className="card">
          <div className="card-header">Hospital Inventory Levels</div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Item ID</th>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Stock Level</th>
                  <th>Reorder Level</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.stock_level}</td>
                    <td>{item.reorder_level}</td>
                    <td>
                      <Link to={`/request?name=${encodeURIComponent(item.name)}&hospital=Hospital 1`}>
                        <button className="request-btn">Request</button>
                      </Link>
                      <button className="request-btn" onClick={() => handleDeleteItem(item.id)}>Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
