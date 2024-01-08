import react from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>
);
