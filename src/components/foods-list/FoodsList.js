import React from "react";
import "./FoodsList.css";
import { useLocation } from "react-router-dom";
import FoodCard from "../food-card/FoodCard";

const FoodsList = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(2)[0];

    return (
        <div>
            <h1>FoodsList.js - {id}</h1>
            <FoodCard />
        </div>
    );
};

export default FoodsList;