import React, { createContext } from "react";
import allProduct from "../Components/Assets/all_product";
import productData from "../Components/Assets/data";
import newCollection from "../Components/Assets/new_collections";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const contextValue = { allProduct, productData, newCollection };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
