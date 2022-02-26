import React, { useState, useEffect } from "react";
import "./FoodsList.css";
import foodsApi from "../../utils/foodsApi";
import { useParams } from "react-router-dom";
import FoodCard from "../../components/food-card/FoodCard";

const FoodsList = () => {
    const { idList } = useParams();
    const [foodCards, setFoodCards] = useState([]);
    
    useEffect(() => (async () => setFoodCards(await foodsApi.getFoodsList(idList)))(), [idList]);

    return (
        <div>
            {(idList.slice(0, 13) === "SearchResult=") && (
                <div className="container is-widescreen">
                    <div className="notification is-white-ter">
                        Search Results for "{idList.slice(13)}"
                    </div>
                </div>
            )}
            <div id="foodsList">
                {foodCards.map(foodCard => <FoodCard key={foodCard.idMeal} {...foodCard} />)}
            </div>
        </div>
    );
};

export default FoodsList;