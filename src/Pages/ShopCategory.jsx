import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Footer from "../Components/Footer/Footer";

const ShopCategory = ({ category, bannerImage }) => {
    const { allProduct } = useContext(ShopContext);

    const selctedProducts = allProduct.filter((item) => {
        return item.category === category;
    });

    const randerItem = selctedProducts.map(
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
        <div className="shop-category">
            <img className="shop-category-banner" src={bannerImage} alt="" />
            <div className="shop-category-index-sort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shop-category-products">{randerItem}</div>
            <div className="shop-category-load-more">Load More</div>
            <Footer />
        </div>
    );
};

export default ShopCategory;
