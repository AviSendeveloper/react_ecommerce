import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import React, { useState } from "react";

const Categories = [
    { name: "Shop", value: "shop" },
    { name: "Men", value: "men" },
    { name: "Women", value: "women" },
    { name: "Kids", value: "kids" },
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
                {category.name}
                {selectedManu === category.value && <hr />}
            </li>
        );
    });

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-manu">{renderCategory}</ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
