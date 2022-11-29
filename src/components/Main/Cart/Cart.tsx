import React from 'react';
import Navigation from '../Navigation/Navigation';
import CartContent from './CartContent';
import "./cart.css";
import { Link } from 'react-router-dom';


const Cart: React.FC = () => {
    const cartLS = localStorage.getItem('cart');
    return (
        <>
        <Navigation/>
        {cartLS ? <CartContent/> : 
        <div className='cart_empty'>
            <h1>Your cart is empty</h1>
            <Link to='/Products'>
                <button className='button_shop'>Start shopping</button>
            </Link>
        </div>}
        
        </>
    )
}

export default Cart;