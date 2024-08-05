import React from "react";
import "../styles/About.css"
import Navbar from "../Components/Navbar";


export default function About() {
    return (
        <>
            <Navbar />
            <div className="About-container">
                <b>About Me</b>
                <p>I'm a Web developer |<span> App developer</span></p>
                {/* <p>
                    Hi Guys! I am Mohamed Fazil, a web and app developer with a passion for creating
                    user-friendly, innovative designs. Proficient in HTML, CSS, JavaScript, and Python,
                    I specialize in robust solutions. My skills also include React Native for mobile
                    development. Throughout my IT studies, I've actively participated in hackathons,
                    showcasing my commitment to blending creativity and functionality in every project.


                </p> */}


            </div>
            

        </>
    )
}