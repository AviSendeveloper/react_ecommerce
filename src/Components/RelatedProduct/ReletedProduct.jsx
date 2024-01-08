import React, { useContext } from "react";
import "./ReletedProduct.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

export const ReletedProduct = () => {
    const { productData: relatedProduct } = useContext(ShopContext);

    const randerItem = relatedProduct.map(
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
        <div className="related-product">
            <h1>Related Product</h1>
            <hr />
            <div className="related-product-list">{randerItem}</div>
        </div>
    );
};
