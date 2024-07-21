import React from "react";
import "../styles/Projects.css";
import Image from "../assets/coolboy.png"


export default function Card(){
    return(
        <>
        <div className="Project-card">
                    <img className="Project-image" src={Image} alt="RR" />
                    <div className="Project-info">
                    <h2 className="Project-title">Project Title</h2>
                    <p className="Project-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu

                        </p>
                    </div>
                </div>
        </>
    )
}