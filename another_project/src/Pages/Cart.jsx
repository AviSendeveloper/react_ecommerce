import React from 'react'
import Navbar from "../Components/Navbar";
import CartList from "../Components/CartList";
import Footer from "../Components/Footer";
import BreadCrum from '../Components/BreadCrum';

const Cart = () => {
  return (
    <div className="site-wrap">
      <BreadCrum />
      <CartList />
    </div>
  )
}

export default Cart