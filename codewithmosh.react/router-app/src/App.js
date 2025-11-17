import React, { Component } from 'react';
import Products from './components/products';
import Posts from './components/posts';
import Admin from './components/admin';
import Home from './components/home';
import ProductDetails from './components/ProductDetails';
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
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
        
        <div className="content">
          <Routes>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/posts/:year?/:month?" element={<Posts />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
