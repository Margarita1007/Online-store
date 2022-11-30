import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo2.png';
import { CartItems } from '../../types/types';
import './Header.css';

const Header: React.FC = () => {
    const [inputValue, setInputValue] = useState(0);
    useEffect(() => {
        const cartLS = localStorage.getItem('cart');
        if (cartLS) {
            const cart: CartItems[] = JSON.parse(cartLS);
            setInputValue(cart.length);
        }
    })
    
    return (
        <header>
        <div className='header-wrapper'>
            <div className="logo"> 
                <img src={logo} alt="logo"/>
            </div>
            <nav className="nav">
                <div className="nav-list" id="myTopnav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/About" className="nav-link">About</Link>
                    <Link to="/Products" className="nav-link">Products</Link>
                </div>
            </nav>
            <div className="cart">
                <Link to="/Cart">
                    <img className="img-cart" src='../../assets/icons/cart.png' alt="cart"/>
                </Link>
                <input id='cart-counter' className="cart-counter" type="button" value={inputValue} data-counter/>
            </div>
        </div>
        </header>
    )
}

export default Header;