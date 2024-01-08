import React, { useContext } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const NewCollections = () => {
    const { newCollection } = useContext(ShopContext);

    const randerItem = newCollection.map(
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
        <div className="new-collection">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">{randerItem}</div>
        </div>
    );
};

export default NewCollections;
