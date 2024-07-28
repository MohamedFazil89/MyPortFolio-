import React from "react"
import '../styles/Intro.css'
import Image from "../assets/coolboy.png";

function Intro(props) {
    return (
        <>
        <div className="intro-container">
                {/* <BackGround /> */}

            <div className="text-details">
                <p className="Greet"> <span>Hi! Friends</span> I'm</p>
                <h1>{props.fName} <span>{props.lName}</span></h1>
                <p className="title">{props.title}</p>
                <div className="Button">
                    <a href="#" className="CV" >Download CV</a>
                    <button className="Hire">Hire Me</button>

                </div>

            </div>
            <div className="image-container">
                <img src={Image} alt="boy" className="image" />
                {/* <Earth /> */}

            </div>
        </div>
        </>


    )
}

export default Intro;