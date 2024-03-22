import React from "react";

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart,getTotal, decreaseCart, removeFromCart, RootState} from "./cartSlice";
import {useEffect} from "react";

import {selectCartItems, selectTotalItems} from "../../selectors/selectors";
interface IProps{}

let Cart:React.FC<IProps> = () => {
    const totalItems = useSelector((state: RootState) => selectTotalItems(state));
    const Phones = useSelector((state: RootState) => selectCartItems(state));
    const cartTotalAmount = useSelector((state: RootState) => state.cart.cartTotalAmount);

    useEffect(() => {
        dispatch(getTotal());
    }, [Phones]);

    const dispatch = useDispatch();
    const handleRemoveFromCart = (cartItem:any) => {
        dispatch(removeFromCart(cartItem));
    };
    const handleDecrItem = (cartItem:any) => {
        dispatch(decreaseCart(cartItem));
    };

    const handleIncreaseItem = (cartItem:any) => {
        dispatch(addToCart(cartItem));
    };

    return(

        <React.Fragment>
            <>
                <div className="flex flex-wrap justify-center mx-auto">
                    <div className="w-full lg:w-1/2">
                        {Phones.map((item, index) => (
                            <div className="mt-20" key={item.id}>
                                <div className=" container p-6 mx-auto bg-white rounded-lg">
                                    <p className=" font-bold mb-1 text-xl ">Cart - {totalItems} Items</p>
                                    <div className='flex items-start justify-around mt-3 border-b-2 p-2 mb-6 border-t-2'>
                                        <div>
                                            <img className="h-48 mb-10" alt="phone_img" src={item.img}/>
                                        </div>

                                        <div className="p-4 ">
                                            <div className="font-bold text-xl mb-2">{item.title}</div>
                                            <button onClick={() => handleRemoveFromCart(item)}  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                    <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="p-6 flex items-center  space-x-4">
                                            <button onClick={() => handleDecrItem(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
                                            <p>{item.cartQuantity} Quantity</p>
                                            <button onClick={() => handleIncreaseItem(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {totalItems ?  <div className="w-full p-10 xl:w-1/3 lg:w-1/2 lg:p-0 mt-8 ml-2 lg:mt-20 w-1/3-lg ">
                        <div className="p-6 bg-white rounded-lg text-xl">
                            <div className="mb-6 border-b-2">
                                <h2 className="h-10 font-bold">Summary</h2>
                            </div>
                            <div className="flex justify-between">
                                <p>Total Quantity</p>
                                <p>{totalItems}</p>
                            </div>
                            <div className="flex justify-between font-bold">
                                <p>Total amount </p>
                                <p>{cartTotalAmount}</p>
                            </div>
                            <Link className="flex justify-center mt-4 bg-blue-500 hover:bg-blue-700 text-white  py-3 rounded" to="/">GO TO CHECKOUT</Link>
                        </div>
                    </div> : ''}
                </div>
            </>
        </React.Fragment>

    )
};
export default Cart;