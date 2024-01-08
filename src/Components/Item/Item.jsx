import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, image, name, newPrice, oldPrice }) => {
    return (
        <div className="item">
            <Link
                to={`/product/${id}`}
                style={{ textDecoration: "none" }}
                onClick={window.scrollTo(0, 0)}>
                <img src={image} alt="" />
                <p>{name}</p>
            </Link>
            <div className="item-prices">
                <div className="item-price-new">${newPrice}</div>
                <div className="item-price-old">${oldPrice}</div>
            </div>
        </div>
    );
};

export default Item;
