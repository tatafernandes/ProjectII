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
    getMainCourse = async () => {
        try {            
            const { data: { meals: beef } } = await this.api.get("/filter.php?c=Beef");
            const { data: { meals: chicken } } = await this.api.get("/filter.php?c=Chicken");
            const { data: { meals: lamb } } = await this.api.get("/filter.php?c=Lamb");
            const { data: { meals: miscellaneous } } = await this.api.get("/filter.php?c=Miscellaneous");
            const { data: { meals: pasta } } = await this.api.get("/filter.php?c=Pasta");
            const { data: { meals: pork } } = await this.api.get("/filter.php?c=Pork");
            const { data: { meals: seafood } } = await this.api.get("/filter.php?c=Seafood");
            const { data: { meals: vegan } } = await this.api.get("/filter.php?c=Vegan");
            const { data: { meals: vegetarian } } = await this.api.get("/filter.php?c=Vegetarian");
            const { data: { meals: goat } } = await this.api.get("/filter.php?c=Goat");

            const mainCourse = [
                ...beef,
                ...chicken,
                ...lamb,
                ...miscellaneous,
                ...pasta,
                ...pork,
                ...seafood,
                ...vegan,
                ...vegetarian,
                ...goat
            ];

            return mainCourse;
        } catch {
            throw new Error("Cannot Fetch MainCourse");
        };
    };
};

const foodsApi = new FoodsApi();

const FoodsList = () => {
    const { pathname } = useLocation();
    const idFoodsList = pathname.split("/").slice(2)[0];
    const [foodCards, setFoodCards] = useState([]);
    
    useEffect(() => (async () => setFoodCards(await foodsApi.getMainCourse()))(), [idFoodsList]);

    return (
        <div>
            <h1>FoodsList.js - {idFoodsList}</h1>
            {foodCards.map(foodCard => <h2 key={foodCard.idMeal}>{foodCard.strMeal}</h2>)}
            <FoodCard />
        </div>
    );
};

export default FoodsList;