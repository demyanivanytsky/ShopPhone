import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {RootState} from "../Cart/cartSlice";
import {selectTotalItems} from "../../selectors/selectors";

interface IProps{}
let NavBar:React.FC<IProps> = () => {

    const totalItems = useSelector((state: RootState) => selectTotalItems(state));

    return(
        <React.Fragment>
            <ul className="flex bg-white h-19 justify-between p-4">
                <li className="list-item">
                    <Link className="text-black text-lg hover:text-blue-800" to="/">NavBar</Link>
                </li>
                <li className="list-item ">
                    <Link className="text-blue-500 text-lg hover:text-blue-800" to="/main">All Product</Link>
                </li>
                <li className="list-item ">
                    <Link className="text-blue-500 text-lg hover:text-blue-800" to="/cart">Cart({totalItems})</Link>
                </li>
            </ul>
        </React.Fragment>
    )
};
export default NavBar;