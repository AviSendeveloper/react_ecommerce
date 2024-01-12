import React from 'react'
import Navbar from '../Components/Navbar'
import BreadCrum from '../Components/BreadCrum'
import Footer from '../Components/Footer'
import ItemDescription from '../Components/ItemDescription'
import FeatureCollection from '../Components/FeatureCollection'

const ShopSingle = () => {
  return (
    <div className="site-wrap">
      <BreadCrum />
      <ItemDescription />
      <FeatureCollection />
    </div>
  )
}

export default ShopSingle