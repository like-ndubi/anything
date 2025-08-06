import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Addproduct from './components/Addproduct';
import Notfound from './components/Notfound';
import Makepayment from './components/Makepayment';
import JoinUs from './components/Joinus';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";


import PrivateRoute from './components/PrivateRoute'; // import your PrivateRoute

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/Getproducts" element={<Getproducts />} />

          {/* Protected Routes */}
          <Route
            path="/Addproduct"
            element={
              <PrivateRoute>
              <Addproduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/Joinus"
            element={
              <PrivateRoute>
                <JoinUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/Makepayment"
            element={
              <PrivateRoute>
                <Makepayment />
              </PrivateRoute>
            }
          />

          {/* Catch all - 404 */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
  