import React, { useState, useEffect } from "react";
import "./FoodsList.css";
import axios from "axios";
import { useParams } from "react-router-dom";
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
            const categories = [
                "Beef",
                "Chicken",
                "Lamb",
                "Miscellaneous",
                "Pasta",
                "Pork",
                "Seafood",
                "Vegan",
                "Vegetarian",
                "Goat"
            ];

            const mainCourse = [];
            for (let i = 0; i < categories.length; i += 1) {
                const { data: { meals } } = await this.api.get(`/filter.php?c=${categories[i]}`)
                mainCourse.push(...meals);
            };

            return mainCourse;
        } catch {
            throw new Error("Cannot Fetch MainCourse");
        };
    };
    getFoods = id => {
        switch (id) {
            case "main-course":
                return this.getMainCourse();;
            case "dessert":
                return this.getDessert();
            default:
                console.log("Wrong pathname");
        };
    };
};

const foodsApi = new FoodsApi();

const FoodsList = () => {
    const { idList } = useParams();
    const [foodCards, setFoodCards] = useState([]);
    
    useEffect(() => (async () => setFoodCards(await foodsApi.getFoods(idList)))(), [idList]);

    return (
        <div id="foodsList">
            {foodCards.map(foodCard => <FoodCard key={foodCard.idMeal} {...foodCard} />)}
        </div>
    );
};

export default FoodsList;