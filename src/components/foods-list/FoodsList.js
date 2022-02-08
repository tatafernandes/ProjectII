import React from "react";
import "./FoodsList.css";
import { useLocation } from "react-router-dom";
import FoodCard from "../food-card/FoodCard";

const FoodsList = () => {
    const { pathname } = useLocation();

    return (
        <div>
            <h1>FoodsList.js - {pathname}</h1>
            <FoodCard />
        </div>
    );
};

export default FoodsList;