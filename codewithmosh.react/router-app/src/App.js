import React, { Component } from 'react';
import Products from './components/products';
import Home from './components/home';
import { Route, Routes, Link } from 'react-router-dom';

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">Admin</a></li>
          </ul>
        </nav>
        
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
