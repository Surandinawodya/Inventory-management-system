import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/ItemAdmin.css";
import Header from '../components/Header';

function ItemAdmin() {
    const [items, setItems] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({ id: "", name: "", quantity: "" });

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await axios.get("http://localhost/react_backend/items.php");
        setItems(response.data);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formData.name.trim() === "" || formData.quantity === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (formData.id) {
            await axios.put("http://localhost/react_backend/items.php", formData);
        } else {
            await axios.post("http://localhost/react_backend/items.php", formData);
        }
        fetchItems();
        setFormVisible(false);
    };

    const handleEdit = (item) => {
        setFormData(item);
        setFormVisible(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            await axios.delete(`http://localhost/react_backend/items.php?id=${id}`);
            fetchItems();
        }
    };

    return (
        <div>
            <Header />
            <h1>Admin Dashboard</h1>
            <button onClick={() => setFormVisible(true)}>Add New Item</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {formVisible && (
                <form onSubmit={handleFormSubmit}>
                    <input type="hidden" value={formData.id} />
                    <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    <input type="number" placeholder="Quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} required />
                    <button type="submit">Save</button>
                </form>
            )}
        </div>
    );
}

export default ItemAdmin;
