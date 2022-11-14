import { CartItems, State } from "../../types/types";

const cartLS = localStorage.getItem('cart');
let cart: CartItems[] = [];
if (cartLS) {
    cart = JSON.parse(cartLS);
}

const state: State = {
    'cart': cart,
    'filters': {}
}

export default state;