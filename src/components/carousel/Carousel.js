import React, { useState, useEffect } from "react";
import "./Carousel.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import foodsApi from "../../utils/foodsApi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import FoodCard from "../food-card/FoodCard";

const Carousel = ( {strCategory} ) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [foods, setFoods] = useState([]);

    useEffect(() => (async () => setFoods(await foodsApi.getByCategory(strCategory)))(), [strCategory]);

    return (
        <article className="panel is-warning">
            <Link to={`./../foods-list/${strCategory}`}>
                <p className="panel-heading">
                    {strCategory}
                </p>
            </Link>
            <Slider {...settings}>
                {foods.map(food => <FoodCard key={food.idMeal} {...food} />)}
            </Slider>
        </article>
    );
};

export default Carousel;

/*
<div>
            <h2><Link to={`./../foods-list/${strCategory}`}>{strCategory}</Link></h2>
            <Slider {...settings}>
                {foods.map(food => <FoodCard key={food.idMeal} {...food} />)}
            </Slider>
        </div>
        */