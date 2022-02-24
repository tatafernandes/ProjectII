import React from "react";
import "./Home.css";
import FoodImages from "../../components/food-images/FoodImages";
import About from "../../components/about/About";

const Home = () => {
    return (
        <div className='home-js'>
            <h1>Home</h1>
            <FoodImages />
            <About />
        </div>
    );
};

export default Home;