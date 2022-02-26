import React from "react";
import "./Home.css";
//import About from "../../components/about/About";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
    return (
        <div>
            <Carousel category="RandomMeals" />
        </div>
    );
};

export default Home;