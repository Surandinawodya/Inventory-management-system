import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("items");
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({ id: "", name: "", quantity: "" });

    const renderItems = () =>
        items.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
            </tr>
        ));

    const handleShowForm = (id = null) => {
        setFormVisible(true);
        if (id) {
            const item = items.find((i) => i.id === id);
            setFormData({ id: item.id, name: item.name, quantity: item.quantity });
        } else {
            setFormData({ id: "", name: "", quantity: "" });
        }
    };

    const handleFormSubmit = () => {
        const { id, name, quantity } = formData;
        if (!name.trim() || !quantity) {
            alert("Please fill in all fields.");
            return;
        }

        const updatedItems = id
            ? items.map((item) =>
                  item.id === id ? { id: item.id, name, quantity: Number(quantity) } : item
              )
            : [
                  ...items,
                  { id: items.length ? items[items.length - 1].id + 1 : 1, name, quantity: Number(quantity) },
              ];

        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
        setFormVisible(false);
    };

    const handleEdit = (id) => handleShowForm(id);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            const updatedItems = items.filter((item) => item.id !== id);
            setItems(updatedItems);
            localStorage.setItem("items", JSON.stringify(updatedItems));
        }
    };

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <div>
            <header className="header5">
                <div>
                    <img src="/logo.jpg" alt="logo" width="50px" height="30px" />
                </div>
                <div className="header5-right">
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            </header>
            <div className="header">
                <h1>Admin Dashboard</h1>
            </div>
            <div className="container">
                <div className="actions">
                    <h2>Items Management</h2>
                    <button onClick={() => handleShowForm()}>Add New Item</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{renderItems()}</tbody>
                </table>
                {formVisible && (
                    <div className="form-container">
                        <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
                            <input
                                type="hidden"
                                value={formData.id}
                                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Enter Item Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Enter Quantity"
                                value={formData.quantity}
                                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
