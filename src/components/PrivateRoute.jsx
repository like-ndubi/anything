import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 2000); // 2 seconds

      return () => clearTimeout(timer);
    }
  }, [user]);

  if (user) {
    return children;
  }

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div
      style={{
        marginTop: '100px',
        textAlign: 'center',
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#dc3545',
      }}
    >
      Kindly sign in to continue...
    </div>
  );
};

export default PrivateRoute;
