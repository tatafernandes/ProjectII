import React from "react";
import "./Instructions.css";
import ReactPlayer from "react-player/youtube";

const Instructions = ({ instructions, strYoutube }) => (
    <div>
        <h2>Instructions</h2>
        {instructions.map(instruction => <p key={instruction.id}>&emsp;{instruction.paragraph}</p>)}
        <ReactPlayer url={strYoutube} controls={true} />
    </div>
);


export default Instructions;