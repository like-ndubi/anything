import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Makepayment = () => {
  const { product } = useLocation().state || {};
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMessage("Please wait as we process your payment...");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", product.product_cost);

      const response = await axios.post(
        "https://ndubi.pythonanywhere.com//api/mpesa_payment",
        data
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const img_url =
    "https://ndubi.pythonanywhere.com/static/images/" + product.product_photo;

  return (
    <div>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}
      >
        <div
          className="shadow"
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "40px",
            width: "100%",
            maxWidth: "600px",
            minHeight: "700px",
          }}
        >
          {/* 🖼️ Centered Image */}
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            <img
              src={img_url}
              alt={product.product_name}
              style={{
                maxWidth: "180px",
                maxHeight: "180px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>

          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#28a745",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            LIPA NA MPESA
          </h2>

          <div
            style={{
              marginBottom: "20px",
              backgroundColor: "#f1f1f1",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Product Name:</strong> {product.product_name}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Product Cost:</strong> KES {product.product_cost}
            </p>
          </div>

          {message && (
            <div
              style={{
                backgroundColor: "#e9ecef",
                padding: "10px 15px",
                borderRadius: "6px",
                marginBottom: "15px",
                fontSize: "14px",
                color: "#333",
              }}
            >
              {message}
            </div>
          )}

          <form onSubmit={submit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{
                  borderRadius: "8px",
                  padding: "12px",
                  fontSize: "15px",
                  borderColor: "#ccc",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
              style={{
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
              }}
            >
              Make Payment
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Makepayment;