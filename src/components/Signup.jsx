import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  // useState hooks
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we upload your data!");
    setError('');
    setSuccess('');

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("phone", phone);
      data.append("password", password);

      const response = await axios.post(
        "https://ndubi.pythonanywhere.com//api/signup",
        data
      );
      setLoading("");
      setSuccess(response.data.success);
    } catch (error) {
      setLoading("");
      setError(error.message || "Something went wrong");
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "rgba(224, 222, 222, 0.85)",
          border: "2px solid #333",         // strong dark outline
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.5)", // optional stronger shadow
          borderRadius: "8px",
          boxSizing: "border-box",
          padding: "2rem",
        }}
      >
        <h2 className="text-center mb-4">Sign Up</h2>

        {loading && <div className="alert alert-info">{loading}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter username"
            onChange={(e) => { setUsername(e.target.value); setError(''); setSuccess(''); }}
            value={username}
            required
          />
          <br />

          <input
            type="email"
            className="form-control"
            placeholder="enter email"
            onChange={(e) => { setEmail(e.target.value); setError(''); setSuccess(''); }}
            value={email}
            required
          />
          <br />

          <input
            type="text"
            className="form-control"
            placeholder="enter phone"
            onChange={(e) => { setPhone(e.target.value); setError(''); setSuccess(''); }}
            value={phone}
            required
          />
          <br />

          <input
            type="password"
            className="form-control"
            placeholder="enter password"
            onChange={(e) => { setPassword(e.target.value); setError(''); setSuccess(''); }}
            value={password}
            required
          />
          <br />

          <button type="submit" className="btn btn-success w-100">
            SIGN UP
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/">Signin</Link>
        </p>
        <p className="text-center">
          Or <Link to="/Getproducts">Stay logged out</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
