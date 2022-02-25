import React, { useState, useEffect } from "react";
import "./CategoriesButton.css";
import foodsApi from "../../utils/foodsApi";
import { NavLink } from "react-router-dom";

const CategoriesButton = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => (async () => setCategories(await foodsApi.getCategories()))(), []);

    return (
        <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
                <NavLink to="/food-carousel" className="navbar-link">
                    Categories
                </NavLink>
                <div className="navbar-dropdown is-boxed">
                    {categories.map(category => (
                        <NavLink key={category.idCategory} to={`/foods-list/${category.strCategory}`} className="navbar-item">
                            {category.strCategory}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesButton;