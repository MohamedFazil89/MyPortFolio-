import React from "react";
import Navbar from "../Components/Navbar";
import "../styles/Contact.css"
import Connection from "../Components/ConnectionLinks";




export default function Contact(){
    return(
        <>
                

            <Navbar />
            <Connection />
            <div className="contact">
                <p>What's next?</p>
                <h1>Get In Touch</h1>
           <div className="Form-container">
            <input type="text" className="input Name" placeholder="Ex:John" />
            <input type="text" className="input Email" />
            <input type="text" className="input message" />
            <input type="submit" className="input submit"  />


           </div>
           
        </div>
        

        </>
        
    )
}