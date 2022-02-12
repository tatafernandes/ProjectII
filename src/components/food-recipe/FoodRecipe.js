import React, { useState, useEffect } from "react";
import "./FoodRecipe.css";
import { useParams } from "react-router-dom";
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

const foodApi = new FoodsApi();

const FoodRecipe = () => {
    const { idRecipe } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => (async () => setRecipe(await foodApi.getRecipe(idRecipe)))(), [idRecipe]);
    console.log(recipe);

    return (
        <>
            {recipe.strMeal}
        </>
    );
};

export default FoodRecipe;