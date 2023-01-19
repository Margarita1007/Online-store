import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import logo from '../../assets/icons/logo3.png';
import { CartItems } from '../../types/types';
import './Header.css';
import cartImg from "../../assets/icons/cart.png";

const Header: React.FC = () => {
    const [inputValue, setInputValue] = useState(0);
    const cart = useAppSelector(state => state.cart);
    useEffect(() => {
        // const cartLS = localStorage.getItem('cart');
        // if (cartLS) {
        //     const cart: CartItems[] = JSON.parse(cartLS);
        //     setInputValue(cart.length);
        // }
        setInputValue(cart.cartItem.length);
    },[cart.cartItem])
    
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
                    <img className="img-cart" src={cartImg} alt="cart"/>
                </Link>
                <input id='cart-counter' className="cart-counter" type="button" value={inputValue} data-counter/>
            </div>
        </div>
        </header>
    )
}

export default Header;