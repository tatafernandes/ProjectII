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
        <div id="foodsList">
            {foodCards.map(foodCard => <FoodCard key={foodCard.idMeal} {...foodCard} />)}
        </div>
    );
};

export default FoodsList;