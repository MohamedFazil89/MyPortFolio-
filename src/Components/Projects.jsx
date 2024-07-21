import React from "react";
import "../styles/Projects.css";
import Card from "./Card";



export default function Projects(){
    return(
        <div className="Projects">
            <p className="Project-section">Selected Works</p>
            <div className="Project-container">
                <Card />
                <Card />
                <Card />
                <Card />
                
            </div>
            

        </div>
    )
}