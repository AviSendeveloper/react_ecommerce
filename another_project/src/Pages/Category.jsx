import React from 'react'
import CategoryBanner from '../Components/Banners/CategoryBanner'
import BreadCrum from '../Components/BreadCrum'
import ShopList from '../Components/ShopList'
import { useParams } from 'react-router-dom'

const categoryList = [
    {
        name: "Men",
        value: "men",
        image: "/assets/images/model_5.png"
    },
    {
        name: "Women",
        value: "women",
        image: "/assets/images/model_1.png"
    },
    {
        name: "Kids",
        value: "kids",
        image: "/assets/images/children.jpg"
    }
]

const Category = () => {
    const { category } = useParams();

    const selectedCategory = categoryList.find((item) => item.value === category);

    return (
        <div className="site-wrap">
            <CategoryBanner name={selectedCategory?.name} image={selectedCategory?.image} />
            <BreadCrum />
            <ShopList />
        </div>
    )
}

export default Category