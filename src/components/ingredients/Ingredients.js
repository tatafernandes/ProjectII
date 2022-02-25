import React from "react";
import "./Ingredients.css";

const Ingredients = ({ ingredients }) => (
    <div id="ingredients">
        <h2>Ingredients</h2>
        <ul>
            {ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.text}</li>)}
        </ul>
    </div>
);

export default Ingredients;