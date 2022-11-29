import React, { useEffect, useState } from "react";
import { CartItems } from "../../../types/types";
import { info_cards } from "../Cards/info-cards";
import CartItem from "./CartItem";
import CartList from "./CartList";


const CartContent: React.FC = () => {


    const [subtotal, setSubtotal] = useState<number>(0);
    const fee: number = 5.35;
    useEffect(() => {
        const cartLS = localStorage.getItem('cart');
        if (cartLS) {
            const cart: CartItems[] = JSON.parse(cartLS);
            let counter: number = 0;
            cart.forEach((elem) => {
                const findCard = info_cards.find((item) => item.id.toString() === elem.id);
                if (findCard) {
                    const subtotalItem: number = findCard.price * elem.numbers;
                    counter += subtotalItem;
                }
            })
            setSubtotal(Number(counter.toFixed(2))); 
        }
    })



    return (
        <>
        <section>
            <div className="cart_content">
                <div className="cart_header">
                    <div><h5>Item</h5></div>
                    <div><h5>Price</h5></div>
                    <div><h5>Quanity</h5></div>
                    <div><h5>Subtotal</h5></div>
                    <div><h5>Delete</h5></div>

                </div>
                <hr/>
                {CartList()}
                <hr/>
                <div className="total">
                    <h3>Subtotal:</h3> <h3>${subtotal}</h3>
                    <h3>Shipping Fee: </h3> <h3>${fee}</h3>
                    <hr/>
                    <h1>Order total: ${(subtotal + fee).toFixed(2)}</h1>
                </div>
            </div>
        </section>
        </>
    )
}

export default CartContent;