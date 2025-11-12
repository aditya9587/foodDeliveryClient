import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPage from "./pages/Product/ProductPage";
import { RestaurantProvider } from "./ContextApi/RestaurantContext.jsx";
import Profile from "./components/profile/Profile.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import Location from "./pages/location/Location.jsx";
import Payments from "./pages/Payments/Payments.jsx";

function App() {
  return (
    <RestaurantProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addAddress" element={<Location />} />
          <Route path="/payment" element={<Payments />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </RestaurantProvider>
  );
}

export default App;
