import React from "react";
import "./About.css";
import logo from "../../utils/Thavi.png";

const About = () => {
    return (
        <div id="about-us">
            <figure className="content">
                <img src={logo} alt="logo" />
            </figure>
            <div className="content">
                <h1 className="title">About us</h1>
                <p>
                    The ThaVi foods app was created by two aspiring Web Developers currently studying at the Ironhack's
                    Bootcamp. This app provide its users with approximately 283 incredible recipes using the "The Meal DB"
                    (https://www.themealdb.com/api.php) API.
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Developers</th>
                            <th>Nationality</th>
                            <th>Living</th>
                            <th>Goals</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thais Fernandes</td>
                            <td>Brazilian</td>
                            <td>Portugal</td>
                            <td>To become a Web Developer and a great mom!</td>
                        </tr>
                        <tr>
                            <td>Vinícius Leite Batista</td>
                            <td>Brazilian</td>
                            <td>Boa Vista/RR</td>
                            <td>To work abroad in a technology company</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default About;