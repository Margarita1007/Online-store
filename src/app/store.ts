import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/Main/Cart/cartSlice';
import cardReducer from '../components/Main/StateSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cards: cardReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch