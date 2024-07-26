import React from "react";
import "../styles/Projects.css";
import Card from "./Card";
import Image1 from '../assets/dog.png'
import Navbar from "./Navbar";



export default function Projects(){
    return(
        <div className="Projects">
            <Navbar />
            <p className="Project-section">Selected Works</p>
            <div className="Project-container">
                <Card row="row" Image={Image1} />
                <Card row="row" Image={Image1}/>
                <Card row="row" Image={Image1} />
                <Card row="row" Image={Image1}/>

                
            </div>
            

        </div>
    )
}