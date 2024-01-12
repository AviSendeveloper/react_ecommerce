import React from 'react'
import Navbar from '../Components/Navbar'
import BreadCrum from '../Components/BreadCrum'
import Footer from '../Components/Footer'
import ContactBanner from '../Components/Banners/ContactBanner'
import ContactForm from '../Components/ContactForm'

const Contact = () => {
  return (
    <div className="site-wrap">
      <ContactBanner />
      <BreadCrum />
      <ContactForm />
    </div>
  )
}

export default Contact