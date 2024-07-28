import React from "react";
import Navbar from "../Components/Navbar";
import "../styles/Contact.css"
import Connection from "../Components/ConnectionLinks";
// import BackGround from "../Background";




export default function Contact() {
    
    return (
        <>
            

            <Navbar />
            <Connection />
            {/* <BackGround /> */}
            <div className="contact" >
                <p>What's next?</p>
                <h1>Get In Touch</h1>
                <p>Feel free to reach out for projects, collaborations, or just to say hello! Currently seeking new opportunities.</p>
                <div className="Form-container">
                    <input type="text" className="input Name" placeholder="Ex:John" />
                    <input type="text" className="input Email" placeholder="Ex: youremail@gmail.com" />
                    <textarea  className="input message" placeholder="message"/>
                    <input type="submit" className="input submit" value="Send!" />


                </div>



            </div>



        </>

    )
}