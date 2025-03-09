import React, { useState } from "react";
import "../components/request.css";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Request = () => {
  const [requestType, setRequestType] = useState("");
  const [hospital, setHospital] = useState("");
  const [itemType, setItemType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!requestType || !hospital || !itemType || !description || !date || !contact) {
      setError("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("request_type", requestType);
    formData.append("hospital", hospital);
    formData.append("item_type", itemType);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("contact", contact);

    try {
      const response = await fetch("http://localhost/react_backend/submit_order_request.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      alert(result);  // Alert the response from PHP script (success or error message)

      if (response.ok) {
        setSuccessMessage("Request submitted successfully!");
        setRequestType("");
        setHospital("");
        setItemType("");
        setDescription("");
        setDate("");
        setContact("");
      } else {
        setError("Error submitting request");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setError("Error submitting your request");
    }
  };

  return (
    <div className="app">
      <Header />
      <section className="hero">
        <h1>Request an Order for Inventory Management</h1>
        <p>
          Submit your order request to ensure seamless management of biomedical
          equipment and supplies.
        </p>
      </section>

      <main>
        <div className="request-container">
          <div className="request-header">
            <p>
              Complete the form below to place your order or request services.
              Our team will process your request promptly.
            </p>
          </div>

          <form className="request-form" onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            {successMessage && <div className="success">{successMessage}</div>}

            <label htmlFor="request-type">Request Type</label>
            <select
              id="request-type"
              name="request_type"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              required
            >
              <option value="" disabled>Select request type</option>
              <option value="repair">Repair</option>
              <option value="hospital_to_hospital">Hospital to Hospital</option>
              <option value="hospital_to_supplier">Hospital to Supplier</option>
            </select>

            <label htmlFor="hospital">Hospital</label>
            <select
              id="hospital"
              name="hospital"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              required
            >
              <option value="" disabled>Select the hospital</option>
              <option value="hospital1">Hospital 1</option>
              <option value="hospital2">Hospital 2</option>
            </select>

            <label htmlFor="item-type">Type of Item</label>
            <input
              type="text"
              id="item-type"
              name="item_type"
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}
              placeholder="Enter the type of item (e.g., MRI scanner, ventilator)"
              required
            />

            <label htmlFor="description">Request Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide details about the request (e.g., repair issues or item requirements)"
            ></textarea>

            <label htmlFor="date">Request Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="contact">Contact Information</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your contact details (e.g., phone number, email)"
              required
            />

            <button type="submit">Submit Request</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Request;


