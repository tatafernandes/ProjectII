import React from "react";
import "./FoodRecipe.css";
import { useParams } from "react-router-dom";

const FoodRecipe = () => {
    const { idRecipe } = useParams();

    return (
        <h1>FoodRecipe.js {idRecipe}</h1>
    );
};

export default FoodRecipe;