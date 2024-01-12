import React from 'react'
import Navbar from '../Components/Navbar';
import HomeBanner from '../Components/Banners/HomeBanner';
import NewCollection from '../Components/NewCollection';
import PopularProduct from '../Components/PopularProduct';
import HomeFooterBanner from '../Components/Banners/HomeFooterBanner';
import Footer from '../Components/Footer';
import MostRated from '../Components/MostRated';

const Home = () => {
  return (
    <div>
      <div>
        <div className="site-wrap">
          <HomeBanner />
          <NewCollection />
          <PopularProduct />
          <MostRated />
          <HomeFooterBanner />
        </div>
      </div>
    </div>
  )
}

export default Home;