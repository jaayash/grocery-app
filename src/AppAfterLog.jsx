import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AfterLogNav from "./components/Navbr_inside/AfterLogNav";
import InsertProducts from "./components/InsertProducts/InsertProducts";
import Add from "./components/Admin/Add";
import Delete from "./components/Admin/Delete";

const AppAfterLog = ({ onLogout }) => {
  return (
    <>
      <ToastContainer />
      <AfterLogNav onLogout={onLogout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard/:category" element={<InsertProducts />} /> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Add/>} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </>
  );
};

export default AppAfterLog;
