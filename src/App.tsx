import React from 'react';
import "react-toastify/dist/ReactToastify.css";

import {Route, Routes, Navigate} from 'react-router-dom';
import {ToastContainer} from "react-toastify";

import Cart from "./compponents/Cart/Cart";
import AllProduct from "./compponents/AllProduct/AllProduct";
import NavBar from "./compponents/NavBar/NavBar";

function App() {

  return (
      <React.Fragment>
          <ToastContainer/>
          <NavBar/>
            <Routes>
                <Route path="/" element={<Navigate to={'/main'}/>}/>
                <Route path="/main" element={<AllProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
      </React.Fragment>
  );
}

export default App;
