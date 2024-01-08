import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import { ReletedProduct } from "../Components/RelatedProduct/ReletedProduct";

const Product = () => {
    const { allProduct } = useContext(ShopContext);
    const { productId } = useParams();
    const productDetails = allProduct.find((product) => {
        return product.id === Number(productId);
    });

    return (
        <div>
            <ProductDisplay product={productDetails} />
            <DescriptionBox />
            <ReletedProduct />
        </div>
    );
};

export default Product;
