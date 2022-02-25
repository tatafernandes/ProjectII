import React, { useState, useEffect } from "react";
import "./Instructions.css";
import foodsApi from "../../utils/foodsApi";
import ReactPlayer from "react-player/youtube";

const Instructions = ({ recipe }) => {
    const [instructions, setInstructions] = useState([]);

    useEffect(() => (async () => setInstructions(await foodsApi.getInstructions(recipe)))(), [recipe]);

    return (
        <section className="section content">
            <h2 className="subtitle">Instructions</h2>
            {instructions.map(instruction => <p key={instruction.id}>&emsp;{instruction.paragraph}</p>)}
            <ReactPlayer url={recipe.strYoutube} controls={true} />
        </section>
    );
};


export default Instructions;