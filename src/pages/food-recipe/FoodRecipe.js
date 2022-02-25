import React, { useState, useEffect } from "react";
import "./FoodRecipe.css";
import { useParams } from "react-router-dom";
import foodsApi from "../../utils/foodsApi";
import Ingredients from "../../components/ingredients/Ingredients";
import Instructions from "../../components/instructions/Instructions";

const FoodRecipe = () => {
    const { idRecipe } = useParams();
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    useEffect(() => {
        (async () => {
            setRecipe(await foodsApi.fetchRecipe(idRecipe))
            setIngredients(await foodsApi.getIngredients(recipe));
            setInstructions(await foodsApi.getInstructions(recipe));
        })()
    }, [idRecipe, recipe]);

    return (
        <div id="recipe">
            <section id="section">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <div>
                    <h1>{recipe.strMeal}</h1>
                    <Ingredients ingredients={ingredients} />
                </div>
            </section>
            <Instructions instructions={instructions} strYoutube={recipe.strYoutube} />
        </div>
    );
};

export default FoodRecipe;