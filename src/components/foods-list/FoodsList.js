import React from "react";
import "./FoodsList.css";
import { useLocation } from "react-router-dom";

const FoodsList = () => {
    const { pathname } = useLocation();

    return (
        <h1>FoodsList.js - {pathname}</h1>
    );
};

export default FoodsList;