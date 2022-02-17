import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../../components/carousel/Carousel";

class FoodsApi {
    constructor () {
        this.api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    };

    getCategories = async () => {
        try {
            const { data: { categories } } = await this.api.get("/categories.php");

            return categories;
        } catch (error) {
            throw new Error(`Cannot Fetch Categories => ${error}`);
        }
    };
};

const foodsApi = new FoodsApi();

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => (async () => setCategories(await foodsApi.getCategories()))(), []);

    console.log(categories);

    return (
        <>
            <Carousel strCategory={"nome"} />
        </>
    );
};

export default Categories;