import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { CartItems } from "../../../../types/types";
import { setCart } from "../../Cart/cartSlice";
import state from "../../state";

const AddToCart: React.FC<number> = (id) => {

    const cart = useAppSelector(state => state.cart).cartItem
    const dispatch = useAppDispatch()
    // console.log(cart);

    const [addCart, setAddCart] = useState<number>(1);
    const [inCart, setInCart] = useState<boolean>(false);
    const [currentCart, setCurrentCart] = useState<CartItems[]>(cart);
    // const [numberInCart, setNumberInCart] = useState<number>(0);
    // const id = useParams();
    // const idProd = id.id;
    
    const minus = () => {
        if (addCart > 1) {
        setAddCart(addCart - 1);}
    }

    const plus = () => {
        setAddCart(addCart + 1);
    }

    const add = () => {

        const cartItem: CartItems = {
            'id': id.toString(),
            'numbers': addCart
        };     
        setInCart(true);

        if (currentCart.find((item) => item.id === id.toString())) { //проверка на наличие такого товара в стейте/корзине
            const newCart = currentCart.map((item) => {
                if (item.id === id.toString()) {
                    const newItem: CartItems = {
                        'id': item.id,
                        'numbers': item.numbers + addCart
                    }
                    return newItem;
                } else return item;
            })
            setCurrentCart(newCart);
        } else {
            const newCart = currentCart.concat([cartItem]);
            setCurrentCart(newCart);
        }
        added();
        return;
    }

    function added() {
        const text = document.getElementById('settimeout') as HTMLElement;
        setTimeout(() => {
            text.classList.add('disabled')
        }, 1000);
        text.classList.remove('disabled');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(currentCart));
        dispatch(setCart(currentCart));
    }, [currentCart]);

    return (
        <div className="button_container">
            <div className="amount_buttons_container">
                <button className="amount_button" onClick={minus}>-</button>
                <h2>{addCart}</h2>
                <button className="amount_button" onClick={plus}>+</button>
            </div>
            <p className="text_added" id="settimeout">
                {inCart ? 'Added to cart' : ''}
            </p>
            <button className="cart_button" onClick={add}>ADD TO CART</button>
        </div>

    )
}

export default AddToCart;