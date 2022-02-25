import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CategoriesButton from "../categories-button/CategoriesButton";

const NavBar = () => {
    return (
        <nav className="navbar-style">
            <NavLink to='/'><span> LOGO </span></NavLink>
            <CategoriesButton />
        </nav>
    );
};

export default NavBar;