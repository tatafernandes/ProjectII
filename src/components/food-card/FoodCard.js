import React from "react";
import "./FoodCard.css";
import { Link } from "react-router-dom";

const FoodCard = ( {idMeal, strMealThumb, strMeal} ) => {
    return (
        <div className="foodCard">
            <Link to={`./../../food-recipe/${idMeal}`}>
                <img src={strMealThumb} alt={strMeal} />
                <figcaption>{strMeal}</figcaption>
            </Link>
        </div>
    );
};

export default FoodCard;