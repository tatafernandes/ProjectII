import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar-style">
            <NavLink to='/'><span> LOGO </span></NavLink>
            <NavLink to='/food-carousel'>Categories</NavLink>
        </nav>
    );
};

export default NavBar;