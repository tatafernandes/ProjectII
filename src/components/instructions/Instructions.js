import React, { useState, useEffect } from "react";
import "./Instructions.css";
import axios from "axios";

class FoodsApi {
    constructor () {
        this.api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    };
    getInstructions = async id => {
        try {
            const { data: { meals } } = await this.api.get(`/lookup.php?i=${id}`);

            return meals[0].strInstructions;
        } catch (error) {
            throw new Error(`Cannot Fetch Instructions => ${error}`);
        };
    };
};

const foodsApi = new FoodsApi();

const Instructions = ({ idRecipe }) => {
    const [instructions, setInstructions] = useState("");

    useEffect(() => (async () => setInstructions(await foodsApi.getInstructions(idRecipe)))(), [idRecipe]);

    if (instructions.length > 0) {
        console.log(instructions);
    };

    return (
        <h2>Instructions.js</h2>
    );
};

export default Instructions;