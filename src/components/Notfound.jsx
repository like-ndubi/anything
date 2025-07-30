import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3">Oops! Page not found</p>
      <p className="fs-5 mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Homepage
      </Link>
    </div>
  );
};

export default Notfound;
