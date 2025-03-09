import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/ItemUser.css";
import Header from '../components/Header';

function ItemUser() {
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [quantityFilter, setQuantityFilter] = useState("all");

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await axios.get("http://localhost/react_backend/items.php");
        setItems(response.data);
    };

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

    return (
        <div>
            <Header />
            <h1>User Dashboard</h1>
            <input type="text" placeholder="Search items" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <select value={quantityFilter} onChange={(e) => setQuantityFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="greater-than-10">Greater than 10</option>
                <option value="less-than-5">Less than 5</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
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
        </div>
    );
}

export default ItemUser;
