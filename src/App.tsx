import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Products from './components/Main/ProdList/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Main/Home/Home';
import About from './components/Main/About/About';
import Product from './components/Main/ProdList/Product/Product';
import { CartItems } from './types/types';
import Cart from './components/Main/Cart/Cart';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
            <Route path="Products" element={<Products/>} />
            <Route path="/" element={<Home/>} />
            <Route path="About" element={<About />}/>
            <Route path='Products/:id' element={<Product />} />
            <Route path='Cart' element={<Cart />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
