import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../compponents/Cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch; //типізація для dispatch