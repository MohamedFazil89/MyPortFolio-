import React from "react";
import "../styles/Projects.css";


export default function Card(props){
    return(
        <>
        <div className="Project-card autoShown" style={{ flexDirection:props.row}}>
                    <img className="Project-image" src={props.Image} alt="RR" />
                    <div className="Project-info">
                    <h2 className="Project-title">Project Title</h2>
                    <p className="Project-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu

                        </p>
                        <button className="Project-preview">Preview</button>
                    </div>
                </div>
        </>
    )
}