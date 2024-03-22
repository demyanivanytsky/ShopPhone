import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../compponents/Cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
