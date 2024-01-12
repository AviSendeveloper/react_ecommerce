import React from 'react'
import Navbar from '../Components/Navbar'
import ShopBanner from '../Components/Banners/ShopBanner'
import BreadCrum from '../Components/BreadCrum'
import ShopList from '../Components/ShopList'
import NewCollection from '../Components/NewCollection'
import Footer from '../Components/Footer'

const Shop = () => {
  return (
    <div className="site-wrap">
      <ShopBanner />
      <BreadCrum />
      <ShopList />
      <NewCollection />
    </div>
  )
}

export default Shop