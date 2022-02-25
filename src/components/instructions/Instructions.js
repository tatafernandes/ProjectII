import React, { useState, useEffect } from "react";
import "./Instructions.css";
import foodsApi from "../../utils/foodsApi";
import ReactPlayer from "react-player/youtube";

const Instructions = ({ recipe }) => {
    const [instructions, setInstructions] = useState([]);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        (async () => {
            setInstructions(await foodsApi.getInstructions(recipe));
            if (await recipe.strYoutube.length > 0) {
                setShowVideo(true);
            };
        })()
    }, [recipe]);

    return (
        <section className="section">
            <div className="content">
                <h2 className="subtitle">Instructions</h2>
                {instructions.map(instruction => <p key={instruction.id}>&emsp;{instruction.paragraph}</p>)}
                {showVideo && <ReactPlayer url={recipe.strYoutube} controls={true} width="100%" />}
            </div>
        </section>
    );
};


export default Instructions;