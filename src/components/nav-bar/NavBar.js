import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CategoriesButton from "../categories-button/CategoriesButton";

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
                            <p className="control">
                                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                    <span className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                    <span>
                                        Tweet
                                    </span>
                                </a>
                            </p>
                            <p className="control">
                                <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                                    <span className="icon">
                                        <i className="fas fa-download"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

/*
<nav className="navbar-style">
            <NavLink to='/'><span> LOGO </span></NavLink>
            <CategoriesButton />
        </nav>
        */