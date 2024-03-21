import React from "react";
import {IPhones} from "../../models/IPhones";

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart, RootState} from "./cartSlice";
import {selectCartItems, selectTotalItems} from "../../selectors/selectors";

interface IState{
    phone:IPhones[];
}
interface IProps{}

let Cart:React.FC<IProps> = () => {
    const totalItems = useSelector((state: RootState) => selectTotalItems(state));
    const Phones = useSelector((state: RootState) => selectCartItems(state));

    // const incQuantity = () => {
    //
    // };
    const dispatch = useDispatch();
    const handleRemoveFromCart = (cartItem:any) => {
        dispatch(removeFromCart(cartItem));
    };

    return(
        <React.Fragment>
            <>
            {Phones.map((item, index) => (
                <ul>
                    <li>
                        <div key={item.id} className="container mt-20 p-8 w-1/2 mx-auto bg-white rounded-lg">
                            <p className="mb-1 h-10">Cart - {totalItems} Items</p>
                            <img className="h-48 mb-10" alt="phone_img" src={item.img}/>
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <button onClick={() => handleRemoveFromCart(item)} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>

                            <div className="mt-4 flex items-center space-x-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
                                <p>{item.cartQuantity} Quantity</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
                            </div>
                        </div>

                        <div className="container p-8 w-1/2 mt-10 mx-auto bg-white rounded-lg">
                            <h2 className=" mb-10 text-xl">Summary</h2>
                            <p>Total Quantity {totalItems}</p>
                            <p className="py-1 mb-2">Total amount 2000</p>
                            <Link className="mx-auto  w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/">GO TO CHECKOUT</Link>
                        </div>
                    </li>
                </ul>
            ))}
            </>
        </React.Fragment>
    )
};
export default Cart;