import React, { useState, useEffect } from "react";
import "./Ingredients.css";
import foodsApi from "../../utils/foodsApi";

const Ingredients = ({ recipe }) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => (async () => setIngredients(await foodsApi.getIngredients(recipe)))(), [recipe]);

    return (
        <div>
            <h2 className="subtitle">Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.text}</li>)}
            </ul>
        </div>
    );
};

export default Ingredients;