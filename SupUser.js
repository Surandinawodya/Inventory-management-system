import React, { useState, useEffect } from "react";
import "../components/SupUser.css";
import SupplierTable from "../components/SupplierTable";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SupUser() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  // Fetch suppliers from backend
  useEffect(() => {
    fetch("http://localhost/react_backend/get_suppliers.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data for SupUser:", data); // Debugging
        setSuppliers(data);
        setFilteredSuppliers(data); // Initialize filteredSuppliers with all suppliers
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter suppliers based on the search query
    const filtered = suppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(query.toLowerCase()) ||
      supplier.email.toLowerCase().includes(query.toLowerCase()) ||
      supplier.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuppliers(filtered); // Update the filtered suppliers
  };

  return (
    <div>
      <Header />
      <div className="dashboard-header-su">
        <h1>Supplier Dashboard</h1>
      </div>
      
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <SupplierTable suppliers={filteredSuppliers} />
      <Footer />
    </div>
  );
}
import React, { useState, useEffect } from "react";
import "../components/SupUser.css";
import SupplierTable from "../components/SupplierTable";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SupUser() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  // Fetch suppliers from backend
  useEffect(() => {
    fetch("http://localhost/react_backend/get_suppliers.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data for SupUser:", data); // Debugging
        setSuppliers(data);
        setFilteredSuppliers(data); // Initialize filteredSuppliers with all suppliers
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter suppliers based on the search query
    const filtered = suppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(query.toLowerCase()) ||
      supplier.email.toLowerCase().includes(query.toLowerCase()) ||
      supplier.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuppliers(filtered); // Update the filtered suppliers
  };

  return (
    <div>
      <Header />
      <div className="dashboard-header-su">
        <h1>Supplier Dashboard</h1>
      </div>
      
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <SupplierTable suppliers={filteredSuppliers} />
      <Footer />
    </div>
  );
}
import React, { useState, useEffect } from "react";
import "../components/SupUser.css";
import SupplierTable from "../components/SupplierTable";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SupUser() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  // Fetch suppliers from backend
  useEffect(() => {
    fetch("http://localhost/react_backend/get_suppliers.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data for SupUser:", data); // Debugging
        setSuppliers(data);
        setFilteredSuppliers(data); // Initialize filteredSuppliers with all suppliers
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter suppliers based on the search query
    const filtered = suppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(query.toLowerCase()) ||
      supplier.email.toLowerCase().includes(query.toLowerCase()) ||
      supplier.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuppliers(filtered); // Update the filtered suppliers
  };

  return (
    <div>
      <Header />
      <div className="dashboard-header-su">
        <h1>Supplier Dashboard</h1>
      </div>
      
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <SupplierTable suppliers={filteredSuppliers} />
      <Footer />
    </div>
  );
}
import React, { useState, useEffect } from "react";
import "../components/SupUser.css";
import SupplierTable from "../components/SupplierTable";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SupUser() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  // Fetch suppliers from backend
  useEffect(() => {
    fetch("http://localhost/react_backend/get_suppliers.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data for SupUser:", data); // Debugging
        setSuppliers(data);
        setFilteredSuppliers(data); // Initialize filteredSuppliers with all suppliers
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter suppliers based on the search query
    const filtered = suppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(query.toLowerCase()) ||
      supplier.email.toLowerCase().includes(query.toLowerCase()) ||
      supplier.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuppliers(filtered); // Update the filtered suppliers
  };

  return (
    <div>
      <Header />
      <div className="dashboard-header-su">
        <h1>Supplier Dashboard</h1>
      </div>
      
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <SupplierTable suppliers={filteredSuppliers} />
      <Footer />
    </div>
  );
}
import React, { useState, useEffect } from "react";
import "../components/SupUser.css";
import SupplierTable from "../components/SupplierTable";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SupUser() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  // Fetch suppliers from backend
  useEffect(() => {
    fetch("http://localhost/react_backend/get_suppliers.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data for SupUser:", data); // Debugging
        setSuppliers(data);
        setFilteredSuppliers(data); // Initialize filteredSuppliers with all suppliers
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter suppliers based on the search query
    const filtered = suppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(query.toLowerCase()) ||
      supplier.email.toLowerCase().includes(query.toLowerCase()) ||
      supplier.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuppliers(filtered); // Update the filtered suppliers
  };

  return (
    <div>
      <Header />
      <div className="dashboard-header-su">
        <h1>Supplier Dashboard</h1>
      </div>
      
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <SupplierTable suppliers={filteredSuppliers} />
      <Footer />
    </div>
  );
}
import React, { useState, useEffect } from "react";
import "../components/SupUser.css";
import SupplierTable from "../components/SupplierTable";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SupUser() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  // Fetch suppliers from backend
  useEffect(() => {
    fetch("http://localhost/react_backend/get_suppliers.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data for SupUser:", data); // Debugging
        setSuppliers(data);
        setFilteredSuppliers(data); // Initialize filteredSuppliers with all suppliers
      })
      .catch((error) => console.error("Error fetching suppliers:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter suppliers based on the search query
    const filtered = suppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(query.toLowerCase()) ||
      supplier.email.toLowerCase().includes(query.toLowerCase()) ||
      supplier.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuppliers(filtered); // Update the filtered suppliers
  };

  return (
    <div>
      <Header />
      <div className="dashboard-header-su">
        <h1>Supplier Dashboard</h1>
      </div>
      
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <SupplierTable suppliers={filteredSuppliers} />
      <Footer />
    </div>
  );
}
