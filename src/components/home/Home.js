import React from "react";
import "./Home.css";
import FoodImages from "../food-images/FoodImages";
import About from "../about/About";

const Home = () => {
    return (
        <div>
            <h1>Home.js</h1>
            <FoodImages />
            <About />
        </div>
    );
};

export default Home;