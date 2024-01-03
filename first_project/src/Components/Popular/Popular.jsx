import React from "react";
import "./Popular.css";
import ProductData from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
    const randerItem = ProductData.map(
        ({ id, image, name, new_price, old_price }) => {
            return (
                <Item
                    key={id}
                    id={id}
                    image={image}
                    name={name}
                    newPrice={new_price}
                    oldPrice={old_price}
                />
            );
        }
    );
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">{randerItem}</div>;
        </div>
    );
};

export default Popular;
