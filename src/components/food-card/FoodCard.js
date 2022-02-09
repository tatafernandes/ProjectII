import React from "react";
import "./FoodCard.css";
import { Link } from "react-router-dom";

const FoodCard = ( {strMeal} ) => {
    return (
        <Link to="./../../food-recipe">
            <h2>{strMeal}</h2>
        </Link>
    );
};

export default FoodCard;