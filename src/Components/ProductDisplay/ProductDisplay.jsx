import React from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";

export const ProductDisplay = ({ product }) => {
    return (
        <div className="product-display">
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img
                        className="product-display-main-img"
                        src={product.image}
                        alt=""
                    />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-stars">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="product-display-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos sint quibusdam nisi doloremque vel molestiae
                    tempore minima maxime. Obcaecati, quisquam?
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <div className="product-display-right-category">
                    <span>Category: </span>Women, T-Shirt
                </div>
                <div className="product-display-right-category">
                    <span>Tags: </span>Modern, Fashion, Latest
                </div>
            </div>
        </div>
    );
};
