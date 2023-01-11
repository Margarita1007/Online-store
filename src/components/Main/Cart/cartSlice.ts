import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { CartItems } from "../../../types/types";

// interface cartStateI {
//     cartState: CartItems[]
    
// }

const stateCartLS = () => {
    const cartLS = localStorage.getItem('cart');
    if (cartLS) {
        const cart: CartItems[] = JSON.parse(cartLS);
        return cart
    } else {
        return []
    }
}

const initialState = {
    cartItem: stateCartLS()
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartItems[]>) => {
            state.cartItem = action.payload;
            //console.log('state:', current(state));
            // const { id, numbers } = action.payload;
            // state.cartItemID = id;
            // state.cartItemNumbers = numbers;
        },
        removeToCart: (state, action: PayloadAction<string>) => {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cartItem));
        }
    }
})

export const { setCart, removeToCart } = cartSlice.actions;

export const selectCartState = (state: RootState) => state.cart;

export default cartSlice.reducer;