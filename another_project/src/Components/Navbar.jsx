import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="site-navbar bg-white py-2">
            <div className="search-wrap">
                <div className="container">
                    <a href="#" className="search-close js-search-close"><span
                        className="icon-close2"></span></a>
                    <form action="#" method="post">
                        <input type="text" className="form-control"
                            placeholder="Search keyword and hit enter..." />
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <div className="site-logo">
                            <Link to="/" style={{ textDecoration: 'none' }} className="js-logo-clone">Home</Link>
                            <Link to="/"
                            >ShopMax</Link>
                        </div>
                    </div>
                    <div className="main-nav d-none d-lg-block">
                        <nav className="site-navigation text-right text-md-center"
                            role="navigation">
                            <ul
                                className="site-menu js-clone-nav d-none d-lg-block">
                                <li className="active">
                                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                                    {/* <li className="has-children active">
                                        <ul className="dropdown">
                                            <li><a href="#">Menu One</a></li>
                                            <li><a href="#">Menu Two</a></li>
                                            <li><a href="#">Menu Three</a></li>
                                            <li className="has-children">
                                                <a href="#">Sub Menu</a>
                                                <ul className="dropdown">
                                                    <li><a href="#">Menu One</a>
                                                    </li>
                                                    <li><a href="#">Menu Two</a>
                                                    </li>
                                                    <li><a href="#">Menu Three</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}
                                </li>
                                <li><Link to="/shop" style={{ textDecoration: 'none' }}>Shop</Link></li>
                                <li><Link to="/shop" style={{ textDecoration: 'none' }}>New Arrivals</Link></li>
                                <li><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></li>
                                <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="icons">
                        <Link to="#"
                            className="icons-btn d-inline-block js-search-open"><span
                                className="icon-search"></span></Link>
                        {/* <Link to="/cart" className="icons-btn d-inline-block"><span
                            className="icon-heart-o"></span></Link> */}
                        <Link to="/cart"
                            className="icons-btn d-inline-block bag">
                            <span className="icon-shopping-bag"></span>
                            <span className="number">2</span>
                        </Link>
                        <Link to="/cart"
                            className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                                className="icon-menu"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar