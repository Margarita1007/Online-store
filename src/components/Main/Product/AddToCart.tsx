import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CartItems } from "../../../types/types";
import state from "../state";

const AddToCart: React.FC = () => {
    const [addCart, setAddCart] = useState<number>(1);
    const [inCart, setInCart] = useState<boolean>(false);
    const [numberInCart, setNumberInCart] = useState<number>(0);
    const id = useParams();
    const idProd = id.id;
    const minus = () => {
        if (addCart > 1) {
        setAddCart(addCart - 1);}
    }

    const plus = () => {
        setAddCart(addCart + 1);
    }

    const add = () => {
        //const input = document.getElementById('cart-counter') as HTMLInputElement;
        if (idProd) {
            setInCart(true);
            const cartItem: CartItems = {
                'id': idProd,
                'numbers': addCart
            };
            // const cartLS = localStorage.getItem('cart');
            // if (cartLS) {
            //     const cartOld: CartItems[] = JSON.parse(cartLS);
            //     const findItem = cartOld.find((item) => item.id === idProd);
            //     if (findItem) {
            //         // cartItem = {
            //         //     'id': idProd,
            //         //     'numbers': findItem.numbers + addCart
            //         // };
            //         // console.log(cartOld)
            //         cartOld.forEach((item) => {
            //             if (item.id === idProd) {
            //                 item.numbers += addCart
            //             }
            //         });
            //         localStorage.setItem('cart', JSON.stringify(cartOld));
            //         // input.value = String(cartOld.length);
            //     } else {
            //         cartOld.push(cartItem);
            //         localStorage.setItem('cart', JSON.stringify(cartOld));
            //         // input.value = String(cartOld.length);
            //     }
            // } else {
            //     localStorage.setItem('cart', JSON.stringify(cartItem));
            //     // input.value = '1';
            // }
            if (state.cart.find((item) => item.id === idProd)) {
                state.cart.forEach((item) => {
                    if (item.id === idProd) {
                        item.numbers += addCart;
                    }
                })
            } else {
                state.cart.push(cartItem);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            const input = document.getElementById('cart-counter') as HTMLInputElement;
            const cartLS = localStorage.getItem('cart');
            if (cartLS) {
                const cart: CartItems[] = JSON.parse(cartLS);
                input.value = String(cart.length);
            }
        }
    }
    return (
        <div className="button_container">
            <div className="amount_buttons_container">
                <button className="amount_button" onClick={minus}>-</button>
                <h2>{addCart}</h2>
                <button className="amount_button" onClick={plus}>+</button>
            </div>
            <p className="text_added">
                {inCart ? 'Added to cart' : ''}
            </p>
            <button className="cart_button" onClick={add}>ADD TO CART</button>
        </div>

    )
}

export default AddToCart;