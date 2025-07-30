import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Getproducts from './components/Getproducts';
import Addproduct from './components/Addproduct';
import Notfound from './components/Notfound';
import Makepayment from './components/Makepayment';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import JoinUs from './components/Joinus';



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path ='/signup' element={<Signup/>}/>
        <Route path ='/signin' element={<Signin/>}/>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='Addproduct' element={<Addproduct/>}/>
        <Route path="*" element={<Notfound/>}/>
        <Route path='/Makepayment' element={<Makepayment/>}/>
        <Route path='/Joinus' element={<JoinUs/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;