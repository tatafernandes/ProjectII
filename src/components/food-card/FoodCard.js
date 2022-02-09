import React from "react";
import "./FoodCard.css";
import { Link } from "react-router-dom";

const FoodCard = ( {idMeal, strMeal} ) => {
    return (
        <Link to={`./../../food-recipe/${idMeal}`}>
            <h2>{strMeal}</h2>
        </Link>
    );
};

export default FoodCard;