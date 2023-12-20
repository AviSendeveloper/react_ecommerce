import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
    return (
        <div className="news-letter">
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subcribe to our news letter and stay updated</p>
            <div>
                <input type="text" name="" placeholder="Your Email id" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;
