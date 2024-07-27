import React from "react";
import "../styles/About.css"
import Navbar from "../Components/Navbar";


export default function About() {
    return (
        <>
        <Navbar />
        <div className="About-container">
            <h1><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span></h1>
            <p>Greetings, I am Mohamed Fazil, a dedicated web
                and app developer with a passion for creating
                futuristic and user-friendly web designs. Proficient
                in <span style={{ textShadow: "0 0 10px red", fontWeight: "bold"}}>HTML</span>, 
                <span style={{ textShadow: " 0 0 10px lightblue", fontWeight: "bold"}}>CSS</span>, 
                <span style={{ textShadow: "0 0 10px yellow", fontWeight: "bold"}}>JavaScript</span>, and <span style={{ textShadow: "0 0 10px gold"}}>Python</span> programming,
                I specialize in developing robust and innovative
                solutions. Additionally, my skills extend to <span style={{ textShadow: "0 0 10px  rgb(1, 192, 255)"}}>React Native </span>
                for mobile app development. Throughout my academic journey
                in Information Technology, I have actively participated in
                hackathons, using these platforms to present innovative
                ideas to the world. My commitment to staying current
                with technological advancements underscores my goal
                of seamlessly blending creativity and functionality
                in every project.</p>
        </div>
        </>
    )
}