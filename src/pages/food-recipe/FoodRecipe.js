import React, { useState, useEffect } from "react";
import "./FoodRecipe.css";
import { useParams } from "react-router-dom";
import foodsApi from "../../utils/foodsApi";
import Ingredients from "../../components/ingredients/Ingredients";
import Instructions from "../../components/instructions/Instructions";

const FoodRecipe = () => {
    const { idRecipe } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => (async () => setRecipe(await foodsApi.fetchRecipe(idRecipe)))(), [idRecipe]);

    return (
        <div>
            <section id="section">
                <div className="content" >
                    <figure>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <figcaption>{recipe.strCategory}</figcaption>
                    </figure>
                </div>
                <div className="content">
                    <h1 className="title">{recipe.strMeal}</h1>
                    <Ingredients recipe={recipe} />
                </div>
            </section>
            <section>
                <Instructions recipe={recipe} />
            </section>
        </div>
    );
};

export default FoodRecipe;