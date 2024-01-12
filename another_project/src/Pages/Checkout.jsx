import React from 'react'
import Navbar from '../Components/Navbar'
import BreadCrum from '../Components/BreadCrum'
import CheckoutForm from '../Components/CheckoutForm'
import Footer from '../Components/Footer'

const Checkout = () => {
  return (
    <div className="site-wrap">
      <BreadCrum />
      <CheckoutForm />
    </div>
  )
}

export default Checkout