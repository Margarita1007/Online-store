import React from 'react';
import Navigation from '../Navigation/Navigation';
import CartContent from './CartContent';
import "./cart.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import state from '../state';
import { useAppSelector } from '../../../app/hooks';
import { store } from '../../../app/store';


const Cart: React.FC = () => {
    const cart1 = useAppSelector(state => state.cart.cartItem);
    const cart = store.getState().cart.cartItem;
    // const dispatch = useDispatch();
    return (
        <>
        <Navigation/>
        {cart.length ? <CartContent/> : 
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