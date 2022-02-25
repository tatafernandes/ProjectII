import React, { useState, useEffect } from "react";
import foodsApi from "../../utils/foodsApi";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => (async () => setCategories(await foodsApi.getCategories()))(), []);

    console.log(categories);

    return (
        <nav className="navbar-style">
            <NavLink to='/'><span> LOGO </span></NavLink>
            <NavLink to='/food-carousel'>Categories</NavLink>
        </nav>
    );
};

export default NavBar;