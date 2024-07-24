import React from "react";
import "../styles/About.css"
import Navbar from "../Components/Navbar";


export default function About() {
    return (
        <div className="About-container">
            <Navbar />
            <h1><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span></h1>
            <p>Greetings, I am Mohamed Fazil, a dedicated web
                and app developer with a passion for creating
                futuristic and user-friendly web designs. Proficient
                in HTML, CSS, JavaScript, and Python programming,
                I specialize in developing robust and innovative
                solutions. Additionally, my skills extend to React Native
                for mobile app development. Throughout my academic journey
                in Information Technology, I have actively participated in
                hackathons, using these platforms to present innovative
                ideas to the world. My commitment to staying current
                with technological advancements underscores my goal
                of seamlessly blending creativity and functionality
                in every project.</p>
        </div>
    )
}