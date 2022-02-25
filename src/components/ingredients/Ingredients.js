import React from "react";
import "./Ingredients.css";

const Ingredients = ({ ingredients }) => (
    <div>
        <h2 className="subtitle">Ingredients</h2>
        <ul>
            {ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.text}</li>)}
        </ul>
    </div>
);

export default Ingredients;