import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSignInAlt,
  FaUserPlus,
  FaPlusCircle,
  FaUsers,
  FaHome,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isCursorNear, setIsCursorNear] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY >= 0 && e.clientY <= 120) {
        setIsCursorNear(true);
      } else {
        setIsCursorNear(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const navbarStyle = {
    borderBottom: isCursorNear ? '3px solid rgba(0,0,0,0.5)' : '2px solid rgba(0,0,0,0.1)',
    boxShadow: isCursorNear ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
    transition: 'border-bottom-color 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyle} className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">
        {/* Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-3">
          <div className="brand-circle d-flex flex-column justify-content-center align-items-center text-white text-center position-relative">
            <div className="fw-bold text-uppercase fs-6">Reedaz</div>
            <div className="brush-line my-1"></div>
            <div className="fs-6">Bookstores</div>
          </div>
          <div className="brand-tagline text-muted">Turning pages, touching souls</div>
        </Link>

        {/* Mobile toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            {user ? (
              <>
                <li className="nav-item">
                  <div className="icon-link">
                    <FaUser />
                    <span>{user.username}</span>
                  </div>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="icon-button">
                    <FaSignOutAlt />
                    <span>Log Out</span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/signin" className="icon-link">
                    <FaSignInAlt />
                    <span>Sign In</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="icon-link">
                    <FaUserPlus />
                    <span>Sign Up</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addproduct" className="icon-link">
                    <FaPlusCircle />
                    <span>Add</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Joinus" className="icon-link">
                    <FaUsers />
                    <span>Join Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Getproducts" className="icon-link">
                    <FaHome />
                    <span>Home</span>
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
