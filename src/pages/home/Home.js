import React from "react";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import About from "../../components/about/About";

const Home = () => {
    return (
        <div>
            <Carousel category="RandomMeals" />
            <About />
        </div>
    );
};

export default Home;