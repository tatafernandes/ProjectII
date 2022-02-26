import React, { useState, useEffect } from "react";
import "./Categories.css";
import foodsApi from "../../utils/foodsApi";
import Carousel from "../../components/carousel/Carousel";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => (async () => setCategories(await foodsApi.getCategories()))(), []);

    return (
        <div>
            {categories.map(category => <Carousel key={category.idCategory} category={category.strCategory} />)}
        </div>
    );
};

export default Categories;