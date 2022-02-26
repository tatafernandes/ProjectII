import React from "react";
import "./About.css";
import logo from "../../utils/Thavi.png";

const About = () => {
    return (
        <div id="about-us">
            <figure className="content">
                <img src={logo} alt="logo" />
                <figcaption>Our logo</figcaption>
            </figure>
            <div className="content">
                <h1 className="title">About us</h1>
                <p>The ThaVi foods app was created for a</p>
            </div>
        </div>
    );
};

export default About;
/*
<div>
    <h2>Thais Fernandes</h2>
    <p>Brazilian, living in Portugal and trying to be a Web Development and a great mom! </p>
</div>
<div>
    <h2>Vinicius Leite Batista</h2>
    <p>Brazilian, from Boa Vista - Roraima, civil engineer student and Ironhacker Web Dev to be!</p>
</div>
*/