import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogInOut/LogIn";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/LogInOut/Signup";
import Admin from "./Components/Admin/Admin";
import Products from "./Components/Products/Products";
import ProductMange from "./Components/Admin/ProductMange";
import UserQuery from "./Components/Admin/UserQuery";
import AddProducts from "./Components/Admin/AddProducts";
import MyForm from "./Components/Admin/MyForm";
import UpdateProduct from "./Components/Admin/UpdateProduct";
import QueryReply from "./Components/Admin/QueryReply";
import UserMange from "./Components/Admin/UserMange";
import Cart from "./Components/Products/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productmange" element={<ProductMange />} />
          <Route path="/userquery" element={<UserQuery />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/addprsoducts" element={<MyForm />} />
          <Route path="/updateproduct/:uid" element={<UpdateProduct />} />
          <Route path="/replyquery/:rid" element={<QueryReply />} />
          <Route path="/usermange" element={<UserMange />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
