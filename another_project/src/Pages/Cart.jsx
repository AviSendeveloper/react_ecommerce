import React from 'react'
import Navbar from "../Components/Navbar";
import CartList from "../Components/CartList";
import Footer from "../Components/Footer";
import BreadCrum from '../Components/BreadCrum';

const Cart = () => {
  return (
    <div class="site-wrap">
      <Navbar />
      <BreadCrum />
      <CartList />
      <Footer />
    </div>
  )
}

export default Cart