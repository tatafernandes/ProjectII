import React from "react";
import "./FoodCard.css";
import { Link } from "react-router-dom";

const FoodCard = ( {idMeal, strMealThumb, strMeal} ) => {
    return (
        <Link to={`./../../food-recipe/${idMeal}`}>
            <img src={strMealThumb} alt={strMeal} />
            <figcaption>{strMeal}</figcaption>
        </Link>
    );
};

export default FoodCard;