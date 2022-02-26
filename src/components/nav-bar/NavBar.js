import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CategoriesButton from "../categories-button/CategoriesButton";
import Search from "../search/Search";

const NavBar = () => {
    return (
        <nav className="navbar is-warning">
            <div className="navbar-brand">
                <span className="navbar-item">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </span>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to="/" className="navbar-item">Home</NavLink>
                    <CategoriesButton />
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;