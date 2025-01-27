import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState(() => {
    // Initialize items from localStorage
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [searchValue, setSearchValue] = useState("");
  const [quantityFilter, setQuantityFilter] = useState("all");
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({ id: "", name: "", quantity: "" });

  useEffect(() => {
    // Save items to localStorage whenever items change
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Filter items based on search and quantity filter
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchValue.toLowerCase().trim());

    let matchesQuantity = true;
    if (quantityFilter === "greater-than-10") {
      matchesQuantity = item.quantity > 10;
    } else if (quantityFilter === "less-than-5") {
      matchesQuantity = item.quantity < 5;
    }

    return matchesSearch && matchesQuantity;
  });

  // Show the form for adding or editing an item
  const showForm = (id = null) => {
    if (id) {
      const item = items.find((i) => i.id === id);
      setFormData({ id: item.id, name: item.name, quantity: item.quantity });
    } else {
      setFormData({ id: "", name: "", quantity: "" });
    }
    setFormVisible(true);
  };

  // Submit the form to add or edit an item
  const submitForm = () => {
    const { id, name, quantity } = formData;

    if (!name || !quantity) {
      alert("Please fill in all fields.");
      return;
    }

    if (id) {
      // Update existing item
      const updatedItems = items.map((item) =>
        item.id === id ? { id, name, quantity: Number(quantity) } : item
      );
      setItems(updatedItems);
    } else {
      // Add a new item
      const newId = items.length ? items[items.length - 1].id + 1 : 1;
      setItems([...items, { id: newId, name, quantity: Number(quantity) }]);
    }

    setFormVisible(false);
  };

  return (
    <div>
      <header className="header5">
        <div>
          <img src="logo.jpg" alt="logo" width="50px" height="30px" />
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

      <div className="header">
        <h1>User Dashboard</h1>
      </div>

      <div className="container">
        <div className="search-filter">
          <input
            type="text"
            placeholder="Search items by name"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <select value={quantityFilter} onChange={(e) => setQuantityFilter(e.target.value)}>
            <option value="all">All Quantities</option>
            <option value="greater-than-10">Greater than 10</option>
            <option value="less-than-5">Less than 5</option>
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {formVisible && (
          <div className="form-container">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="hidden"
                value={formData.id}
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
              <button type="button" className="btn-submit" onClick={submitForm}>
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
