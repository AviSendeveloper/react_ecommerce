import React from 'react'

const ShopCard = ({ name, price, image }) => {
    return (
        <div className="col-lg-6 col-md-6 item-entry mb-4">
            <a href="#"
                className="product-item md-height bg-gray d-block">
                <img src={image} alt="Image"
                    className="img-fluid" />
            </a>
            <h2 className="item-title"><a href="#">{name}</a>
            </h2>
            <strong className="item-price">${price}</strong>
        </div>
    )
}

export default ShopCard