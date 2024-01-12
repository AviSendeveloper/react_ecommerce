import React from 'react'
import ShopFilter from './ShopFilter'
import ShopCard from './ShopCard'
import { Link } from 'react-router-dom'

const ShopList = () => {
    return (
        <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-9 order-1">
                        <ShopFilter text="Shop All" />
                        <div className="row mb-5">
                            <ShopCard name="Blue Shoe" price="20.00" image="assets/images/prod_2.png" />
                            <ShopCard name="Blue Shoe" price="46.00" image="assets/images/prod_3.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/model_5.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/prod_1.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/model_1.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/model_7.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/model_2.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/model_3.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/model_4.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/model_5.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/model_6.png" />
                            <ShopCard name="name" price="20.00" image="assets/images/prod_2.png" />
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="site-block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 order-2 mb-5 mb-md-0">
                        <div className="border p-4 rounded mb-4">
                            <h3
                                className="mb-3 h6 text-uppercase text-black d-block">
                                Categories</h3>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1"><Link to="/category/men"
                                    className="d-flex"><span>Men</span> <span
                                        className="text-black ml-auto">(2,220)</span></Link>
                                </li>
                                <li className="mb-1"><Link to="/category/woen"
                                    className="d-flex"><span>Women</span> <span
                                        className="text-black ml-auto">(2,550)</span></Link>
                                </li>
                                <li className="mb-1"><Link to="/category/kids"
                                    className="d-flex"><span>Children</span>
                                    <span
                                        className="text-black ml-auto">(2,124)</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="border p-4 rounded mb-4">
                            <div className="mb-4">
                                <h3
                                    className="mb-3 h6 text-uppercase text-black d-block">
                                    Filter by Price</h3>
                                <div id="slider-range" className="border-primary">
                                </div>
                                <input type="text" name="text" id="amount"
                                    className="form-control border-0 pl-0 bg-white"
                                    disabled="" />
                            </div>
                            <div className="mb-4">
                                <h3
                                    className="mb-3 h6 text-uppercase text-black d-block">
                                    Size</h3>
                                <label for="s_sm" className="d-flex">
                                    <input type="checkbox" id="s_sm"
                                        className="mr-2 mt-1" /> <span
                                            className="text-black">Small (2,319)</span>
                                </label>
                                <label for="s_md" className="d-flex">
                                    <input type="checkbox" id="s_md"
                                        className="mr-2 mt-1" /> <span
                                            className="text-black">Medium (1,282)</span>
                                </label>
                                <label for="s_lg" className="d-flex">
                                    <input type="checkbox" id="s_lg"
                                        className="mr-2 mt-1" /> <span
                                            className="text-black">Large (1,392)</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <h3
                                    className="mb-3 h6 text-uppercase text-black d-block">
                                    Color</h3>
                                <a href="#"
                                    className="d-flex color-item align-items-center">
                                    <span
                                        className="bg-danger color d-inline-block rounded-circle mr-2"></span>
                                    <span className="text-black">Red (2,429)</span>
                                </a>
                                <a href="#"
                                    className="d-flex color-item align-items-center">
                                    <span
                                        className="bg-success color d-inline-block rounded-circle mr-2"></span>
                                    <span className="text-black">Green
                                        (2,298)</span>
                                </a>
                                <a href="#"
                                    className="d-flex color-item align-items-center">
                                    <span
                                        className="bg-info color d-inline-block rounded-circle mr-2"></span>
                                    <span className="text-black">Blue (1,075)</span>
                                </a>
                                <a href="#"
                                    className="d-flex color-item align-items-center">
                                    <span
                                        className="bg-primary color d-inline-block rounded-circle mr-2"></span>
                                    <span className="text-black">Purple
                                        (1,075)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopList