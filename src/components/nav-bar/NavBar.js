import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

 export const NavBar = () => {
    return <nav className="navbar-style">
        
        <NavLink to='/'><span> LOGO </span></NavLink>
        <NavLink to='/foods-list/main-course'> Main Course </NavLink>
        <NavLink to='/foods-list/dessert'> Dessert </NavLink>
</nav> 
};

export default NavBar;