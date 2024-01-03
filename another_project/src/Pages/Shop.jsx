import React from 'react'
import Navbar from '../Components/Navbar'
import ShopBanner from '../Components/Banners/ShopBanner'
import BreadCrum from '../Components/BreadCrum'
import ShopList from '../Components/ShopList'
import NewCollection from '../Components/NewCollection'
import Footer from '../Components/Footer'

const Shop = () => {
  return (
    <div class="site-wrap">
      <Navbar />
      <ShopBanner />
      <BreadCrum />
      <ShopList />
      <NewCollection />
      <Footer />
    </div>
  )
}

export default Shop