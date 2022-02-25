import React from "react";
import "./FoodCard.css";
import { Link } from "react-router-dom";

const FoodCard = ( {idMeal, strMealThumb, strMeal} ) => {
    return (
        <div className="card">
            <Link to={`./../../food-recipe/${idMeal}`}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={strMealThumb} alt={strMeal} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{strMeal}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FoodCard;