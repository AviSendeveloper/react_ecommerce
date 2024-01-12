import React from 'react'
import BreadCrum from '../Components/BreadCrum'
import AboutBanner from '../Components/Banners/AboutBanner'
import AboutDetails from '../Components/AboutDetails'
import Team from '../Components/Team'

const About = () => {
    return (
        <div className="site-wrap">
            <AboutBanner />
            <BreadCrum />
            <AboutDetails />
            <Team />
        </div>
    )
}

export default About