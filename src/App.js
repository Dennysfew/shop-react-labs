import React from 'react';
import './App.css';
import Home from './components/pages/Home.js'
import Catalog from './components/pages/Catalog.js'
import Cart from './components/pages/Cart.js'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetails from './components/pages/ItemDetails';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/item/:id" element={<ItemDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;