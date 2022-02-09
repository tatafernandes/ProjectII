import React, { useState, useEffect } from "react";
import "./FoodsList.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import FoodCard from "../food-card/FoodCard";

class FoodsApi {
    constructor () {
        this.api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    };
    getDessert = async () => {
        try {
            const { data: { meals } } = await this.api.get("/filter.php?c=Dessert");
            return meals;
        } catch {
            throw new Error("Cannot Fetch Dessert");
        };
    };
};

const foodsApi = new FoodsApi();

const FoodsList = () => {
    const { pathname } = useLocation();
    const idFoodsList = pathname.split("/").slice(2)[0];
    const [foodCards, setFoodCards] = useState([]);
    
    useEffect(() => (async () => setFoodCards(await foodsApi.getDessert()))(), [idFoodsList]);

    return (
        <div>
            <h1>FoodsList.js - {idFoodsList}</h1>
            {foodCards.map(foodCard => <h2 key={foodCard.idMeal}>{foodCard.strMeal}</h2>)}
            <FoodCard />
        </div>
    );
};

export default FoodsList;