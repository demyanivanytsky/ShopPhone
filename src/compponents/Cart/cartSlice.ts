import  {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {store} from "../../store/store";
import {toast} from "react-toastify";

interface CartItem {
    id: string;
    cartQuantity: number;
    title:string;
    img:string;
}

interface CartState {
    cartItems: CartItem[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}
const initialState: CartState = {
    cartItems:localStorage.getItem("Phones") ? JSON.parse(localStorage.getItem("Phones") || '') as CartItem[] : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0, //price
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers : {
       addToCart(state, action: PayloadAction<CartItem>) {
           const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
           if (itemIndex >= 0) {
               state.cartItems[itemIndex].cartQuantity +=1;
               toast.info(`Increased ${action.payload.title} quantity!`, {position:"bottom-left"});
           } else {
                const tempPhone = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempPhone);
                toast.success(`Added ${action.payload.title} to cart!`, {position:"bottom-left"})
           }
           localStorage.setItem("Phones",JSON.stringify(state.cartItems));
       },
       removeFromCart(state, action:PayloadAction<CartItem>) {
           state.cartItems = state.cartItems.filter(item =>
            item.id !== action.payload.id)

            localStorage.setItem("Phones", JSON.stringify(state.cartItems))
            toast.error(`Removed ${action.payload.title} from cart!`, {position:"bottom-left"});
       },
   },
});

export const { addToCart, removeFromCart} = cartSlice.actions;
export  default cartSlice.reducer;
export type RootState = ReturnType<typeof store.getState>;