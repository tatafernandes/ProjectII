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
            <section className="section" style={{display: "flex"}}>
                <div className="content">
                    <figure>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </figure>
                </div>
                <div className="content">
                    <h1 className="title">{recipe.strMeal}</h1>
                    <Ingredients recipe={recipe} />
                </div>
            </section>
            <Instructions recipe={recipe} />
        </div>
    );
};

export default FoodRecipe;
/*
<section class="section">
  <h1 class="title">Section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section>
*/
/*
<section id="section">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <div>
                    <h1>{recipe.strMeal}</h1>
                    <Ingredients ingredients={ingredients} />
                </div>
            </section>
            */