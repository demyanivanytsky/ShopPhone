import {useDispatch} from "react-redux";

import React, {useEffect, useState} from "react";
import {PhoneService} from "../../services/PhoneService";
import {IPhones} from "../../models/IPhones";
import {addToCart} from "../Cart/cartSlice";

interface IState{
   phones: IPhones[];
}
interface IProps{}
let AllProduct:React.FC<IProps> = () => {

    const [phones, setPhones] = useState<IState['phones']>([]);

    const dispatch = useDispatch();

    const handleAddToCart = (phone:any) => {
        dispatch(addToCart(phone));
    };

    useEffect(() => {
        const fetchPhones = async () => {
            try {
               const response = await PhoneService.getAllPhones();
               setPhones(response.data);
            } catch (error) {
                console.error("Помилка під час отримання даних про телефони:", error)
            }
        };
        fetchPhones();

    }, []);
    return(
        <React.Fragment>
            <div className="flex flex-wrap justify-center">
                {phones?.map(phone => (
                    <div key={phone.id} className="bg-white shadow-lg rounded-lg overflow-hidden mt-2 m-2.5">
                        <img src={phone.img} alt="phone_img" className="w-48 h-48 object-center object-cover" />
                        <div className="w-48 h-46 px-6 py-4">
                            <div className="font-bold text-xl mb-2">{phone.title}</div>
                            <p className="text-gray-700 text-base">Ціна: ${phone.price}</p>
                            <button onClick={() => handleAddToCart(phone)} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded">Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
};
export default AllProduct;





