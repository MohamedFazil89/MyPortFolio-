import React from "react";
import "../styles/Projects.css";
import Card from "./Card";
import Image1 from '../assets/dog.png'



export default function Projects(){
    return(
        <div className="Projects">
            <p className="Project-section">Selected Works</p>
            <div className="Project-container">
                <Card row="row-reverse" Image={Image1} />
                <Card row="row" Image={Image1}/>
                <Card row="row-reverse" Image={Image1} />
                <Card row="row" Image={Image1}/>

                
            </div>
            

        </div>
    )
}