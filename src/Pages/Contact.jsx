import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../styles/Contact.css"
import Connection from "../Components/ConnectionLinks";
import axios from "axios";
// import BackGround from "../Background";


/* 1) track the user input
   2) store the data in array
   3) post the data */




export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // const [subject, setSubject] = useState("");


    const handelSubmit = (e) =>{
        const names = e.target.name;
        const Value = e.target.value;
        if(names === "name"){
            setName(Value);
        }else if(names === "email"){
            setEmail(Value);
        }else{
            setMessage(Value);
        }
    }


    const handelSubmitData = async (e) =>{
       e.preventDefault();
       const data = {
        name: name,
        email: email,
        message: message
       }
    
    try{
        const response = await axios.post("http://localhost:3030/api/send", data);
        console.log(response.data);
        alert("Message sent successfully");
        setEmail("")
        setMessage("")
        setName("");
    }catch(err){
        console.log(err);
        alert("Err")
    }

}
    
    return (
        <>
            <Navbar />
            <Connection />
            {/* <BackGround /> */}
            <div className="contact">
                <p>What's next?</p>
                <h1>Get In Touch</h1>
                <p>Feel free to reach out for projects, collaborations, or just to say hello! Currently seeking new opportunities.</p>
                <form className="Form-container" method="POST" onSubmit={handelSubmitData}>
                    <input type="text" className="input Name" placeholder="Ex:John" name="name" value={name} onChange={handelSubmit} required />
                    <input type="text" className="input Email" placeholder="Ex: youremail@gmail.com" name="email" value={email} onChange={handelSubmit} required/>
                    {/* <input type="text" className="input subject" placeholder="Subject/title" name="subject" value={subject} onChange={handelSubmit} required/> */}
                    <textarea rows={3} className="input message" placeholder="message" value={message} name="message" onChange={handelSubmit} required/>
                    <input type="submit" className="input submit" value="Send!" />


                </form>



            </div>



        </>

    )
}