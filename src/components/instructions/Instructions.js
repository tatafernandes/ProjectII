import React from "react";
import "./Instructions.css";
import ReactPlayer from "react-player/youtube";

const Instructions = ({ instructions, strYoutube }) => (
    <section className="section content">
        <h1 className="title">Instructions</h1>
        {instructions.map(instruction => <p key={instruction.id}>&emsp;{instruction.paragraph}</p>)}
        <ReactPlayer url={strYoutube} controls={true} />
    </section>
);


export default Instructions;