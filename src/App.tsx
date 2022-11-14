import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Products from './components/Main/ProdList/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Main/Home/Home';
import About from './components/Main/About/About';
import Product from './components/Main/Product/Product';
import { CartItems } from './types/types';

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
        </Routes>
      </main>
    </div>
  )
}

export default App;
