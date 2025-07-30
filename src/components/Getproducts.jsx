import axios from "axios";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Lazy loading: start with 8
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const observerRef = useRef(); // ref for lazy loading trigger
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading("Please wait as we retrieve the products...");
    setError("");
    try {
      const response = await axios.get(
        "https://ndubi.pythonanywhere.com/api/get_products_details"
      );
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.product_description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setVisibleCount(8); // reset view when search changes
  }, [searchTerm, products]);

  // 🧠 Lazy Loading Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleCount((prev) => {
            if (prev < filteredProducts.length) {
              return prev + 4;
            } else {
              return prev;
            }
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [filteredProducts]);

  const img_url = "https://ndubi.pythonanywhere.com/static/images/";

  return (
    <div>
      <Navbar />

      <header className="App-header">
        <h1 className="text-tertiary">Turning Pages, Touching Souls</h1>
      </header>

      <Carousel />

      <div className="container mt-5">
        <h3 className="mb-3">Available Products</h3>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search for a book..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: "300px", marginLeft: "auto", display: "block" }}
        />

        {loading && <div className="loading-text">{loading}</div>}
        {error && <div className="error-text">{error}</div>}

        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleCount).map((product) => (
              <div
                className="col-md-3 d-flex justify-content-center mb-4"
                key={product.id || product.product_id || product.product_name}
              >
                <div className="card product_card shadow">
                  <div className="product_image_wrapper mt-4">
                    <img
                      src={img_url + product.product_photo}
                      className="product_image"
                      alt={product.product_name}
                      style={{ height: "170px", objectFit: "cover", width: "100%" }}
                    />
                  </div>
                 <div className="card-body product_content">
  <h5 className="product_title">{product.product_name}</h5>
  <p className="product_description">{product.product_description}</p>
  
  <div className="d-flex align-items-center justify-content-between mt-2">
    <b className="text-warning">{product.product_cost}</b>
    
    <button
      onClick={() =>
        navigate("/Makepayment", { state: { product } })
      }
      className="btn btn-light border-0 p-1"
      title="Add to Basket"
    >
      <i className="bi bi-basket2-fill text-success fs-5"></i>
    </button>
  </div>
</div>

                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No products match your search.</p>
          )}
        </div>

        {/* Invisible div for lazy loading trigger */}
        <div ref={observerRef} style={{ height: "1px" }}></div>
      </div>

      <Footer />
    </div>
  );
};

export default Getproducts;
