import React, { useState, useEffect } from "react";
import "./Carousel.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";

class FoodsApi {
    constructor () {
        this.api = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    }

    getByCategory = async category => {
        try {
            const { data: { meals } } = await this.api.get(`/filter.php?c=${category}`)

            return meals;
        } catch (error) {
            throw new Error(`Cannot Fetch ${category} => ${error}`);
        }
    }
}

const foodsApi = new FoodsApi();

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

    console.log(foods);

    return (
        <div>
            <h2>{strCategory}</h2>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(number => <p key={number}>{number}</p>)}
            </Slider>
        </div>
    );
};

export default Carousel;