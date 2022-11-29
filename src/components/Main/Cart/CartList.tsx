import React, { useState } from "react";
import { CartItems } from "../../../types/types";
import CartItem from "./CartItem";

export default function CartList() {
    const [state, setState] = useState<CartItems[]>()
    const cartLS = localStorage.getItem('cart');
        if (cartLS) {
            const cart: CartItems[] = JSON.parse(cartLS);
            // setState(cart);
            // console.log(state);
            const content = cart.map((item) => 
                <div className="cart_item"  key = {item.id} id = {'item_' + item.id}>
                    {CartItem(item)}
                </div>
            )
            return (
                <>
                {content}
                </>
            )
        } else return <div>No items in cart</div>

} 