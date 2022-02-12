import React, { useState, useEffect } from "react";
import "./Ingredients.css";
import axios from "axios";

class FoodsApi {
    constructor () {
        this.api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    };
    getRecipe = async id => {
        try {
            const { data: { meals } } = await this.api.get(`/lookup.php?i=${id}`);

            return meals[0];
        } catch (error) {
            throw new Error(`Cannot Fetch Recipe => ${error}`);
        };
    };
};

const foodsApi = new FoodsApi();

const Ingredients = ({ idRecipe }) => {
    const [ingredients, setIngredients] = useState({});

    useEffect(() => (async () => setIngredients(await foodsApi.getRecipe(idRecipe)))(), [idRecipe])

    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                <li>{ingredients.strMeasure1} {ingredients.strIngredient1}</li>
            </ul>
        </div>
    );
};

export default Ingredients;