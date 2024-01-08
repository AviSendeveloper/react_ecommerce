import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import man_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route
                        path="/mens"
                        element={
                            <ShopCategory
                                bannerImage={man_banner}
                                category="men"
                            />
                        }
                    />
                    <Route
                        path="/womens"
                        element={
                            <ShopCategory
                                bannerImage={women_banner}
                                category="women"
                            />
                        }
                    />
                    <Route
                        path="/kids"
                        element={
                            <ShopCategory
                                bannerImage={kid_banner}
                                category="kid"
                            />
                        }
                    />
                    <Route path="/product" element={<Product />}>
                        <Route path=":productId" element={<Product />} />
                    </Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/login" element={<LoginSignup />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
