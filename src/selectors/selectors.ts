import {createSelector} from "reselect";
import {RootState} from "../compponents/Cart/cartSlice";

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectTotalItems = createSelector (
    selectCartItems,
    (cartItems) => cartItems.reduce((total, item) => total + item.cartQuantity, 0)
);

// const cartItems = useSelector((state: RootState) => state.cart.cartItems);
// const totalItems: number = cartItems.reduce((total, item) => total + item.cartQuantity, 0);
