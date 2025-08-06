import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we log you in!");
    setError('');

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://ndubi.pythonanywhere.com//api/signin",
        data
      );

      setLoading("");
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/Getproducts");
      } else {
        setError(response.data.message || "Invalid login.");
      }
    } catch (error) {
      setLoading("");
      setError(error.message || "Something went wrong.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/bg2.jpg')", 
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "auto",
        border: "2px solid #333",         // strong dark outline
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.5)", // optional stronger shadow
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(247, 241, 241, 0.85)",
          border: "2px solid #333",         // strong dark outline
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.5)", // optional stronger shadow
          borderRadius: "8px",
        }}
      >
        <h2 className="text-center mb-4">Sign In</h2>

        {loading && <div className="alert alert-info">{loading}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <br />
          <button type="submit" className="btn btn-success w-100">
            SIGN IN
          </button>
        </form>

        <br />
        <p className="text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="text-center">
          Or <Link to="/Getproducts">Stay logged out</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
