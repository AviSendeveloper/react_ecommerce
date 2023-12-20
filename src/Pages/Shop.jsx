import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
    return (
        <div>
            {/* <h1>Shop</h1> */}
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Shop;
