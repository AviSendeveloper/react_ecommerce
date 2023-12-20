import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Categories = [
    { name: "Shop", value: "shop", url: "/" },
    { name: "Men", value: "men", url: "mens" },
    { name: "Women", value: "women", url: "womens" },
    { name: "Kids", value: "kids", url: "kids" },
];

const Navbar = () => {
    const [selectedManu, setSelectedManu] = useState("shop");

    const handelSelectManu = (category) => {
        setSelectedManu(category);
    };

    const renderCategory = Categories.map((category) => {
        return (
            <li
                onClick={() => handelSelectManu(category.value)}
                key={category.value}>
                <Link to={category.url} style={{ textDecoration: "none" }}>
                    {category.name}
                    {selectedManu === category.value && <hr />}
                </Link>
            </li>
        );
    });

    return (
        <div className="navbar">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </div>
            </Link>
            <ul className="nav-manu">{renderCategory}</ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
