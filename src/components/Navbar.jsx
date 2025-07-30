import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const buttonStyle = {
    padding: '6px 12px',
    fontSize: '0.9rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    cursor: 'pointer'
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">
        {/* Left: Logo + Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/logo2.jpeg" alt="Logo" style={{ height: '60px' }} />
          <div className="ms-3 brand-text">
            <div className="text-dark fw-bold fs-4 text-uppercase">Reedaz</div>
            <div className="brush-line my-1"></div>
            <div className="text-dark fs-5">Bookstores</div>
          </div>
        </Link>

        {/* Hamburger button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
            {user ? (
              <>
                <li className="nav-item fw-semibold text-dark">{user.username}</li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    style={{ ...buttonStyle, color: 'white', backgroundColor: '#dc3545' }}
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/signin">
                    <button style={buttonStyle}>Sign In</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup">
                    <button style={{ ...buttonStyle, color: 'black' }}>
                      Sign Up
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addproduct">
                    <button style={buttonStyle}>+ Add Product</button>
                  </Link>
                  <Link to="/Joinus">
                    <button style={buttonStyle}>Join Us</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
