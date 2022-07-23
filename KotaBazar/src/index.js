import React from 'react';
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import ShippingAddressScreen from "./components/ShippingAddressScreen";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile'
import { StoreProvider } from './Store';
import SigninScreen from "./components/AuthForm";
import Cart from './components/Cart';
import Order from './components/Order';
import SignUpScreen from './components/SignUp';
import PaymentMethodScreen from './components/PaymentMethod';
import Preview from './components/Preview'
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route
          path="/orders/:id"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path="/payment" element={<PaymentMethodScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </StoreProvider>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
