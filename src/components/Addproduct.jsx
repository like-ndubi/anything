import { useState } from "react";
import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Addproduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we add the product!");
    setMessage("");
    setError("");

    try {
      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost);
      data.append("product_photo", product_photo);

      const response = await axios.post(
        "https://ndubi.pythonanywhere.com//api/add_product",
        data
      );
      setLoading("");
      setMessage("✅ Product added successfully!");
    } catch (error) {
      setLoading("");
      setError("❌ " + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="container-fluid"
        style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingTop: "50px" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-6 card shadow p-4" style={{ backgroundColor: "#fff" }}>
            <h3 className="text-center mb-3">📦 Add a New Book</h3>
            <p className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
              Fill in the form below to upload a new product to your store.
            </p>

            {loading && <div className="alert alert-info py-2">{loading}</div>}
            {message && <div className="alert alert-success py-2">{message}</div>}
            {error && <div className="alert alert-danger py-2">{error}</div>}

            <form onSubmit={submit}>
              <input
                type="text"
                placeholder="Enter product name"
                className="form-control mb-3"
                value={product_name}
                onChange={(e) => setProductName(e.target.value)}
                required
              />

              <textarea
                className="form-control mb-3"
                placeholder="Describe product"
                value={product_description}
                onChange={(e) => setProductDescription(e.target.value)}
                rows={3}
                required
              />

              <input
                type="number"
                placeholder="Enter product cost"
                className="form-control mb-3"
                value={product_cost}
                onChange={(e) => setProductCost(e.target.value)}
                required
              />

              <input
                type="file"
                className="form-control mb-4"
                onChange={(e) => setProductPhoto(e.target.files[0])}
                required
                accept="image/*"
              />

              <button className="btn btn-success w-100" type="submit">
                Upload Product
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Addproduct;
