import React, { useState, useEffect } from "react";
import "./Ingredients.css";
import axios from "axios";

class FoodsApi {
    constructor () {
        this.api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    };
    getIngredients = async id => {
        try {
            const { data: { meals } } = await this.api.get(`/lookup.php?i=${id}`);

            const ingredients1 = [];
            for (let i = 1; i <= 20; i += 1) {
                const measure = await meals[0][`strMeasure${i}`];
                const ingredient = await meals[0][`strIngredient${i}`];

                ingredients1.push(`${measure} ${ingredient}`)
            };

            return ingredients1;
        } catch (error) {
            throw new Error(`Cannot Fetch Recipe => ${error}`);
        };
    };
};

const foodsApi = new FoodsApi();

const Ingredients = ({ idRecipe }) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => (async () => setIngredients(await foodsApi.getIngredients(idRecipe)))(), [idRecipe]);
    console.log(ingredients);

    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
            </ul>
        </div>
    );
};

export default Ingredients;