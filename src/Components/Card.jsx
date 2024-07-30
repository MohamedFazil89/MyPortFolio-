import React from "react";
import "../styles/Projects.css";
import cool from "../assets/wallpaperflare.com_wallpaper.jpg";


export default function Card(props) {
    return (
        <>
            <div className="card">
                <img src={cool} alt="boy" className="Image cool" />
                <div className="card-text">
                    <h2>Project Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit.Eius repellendus
                        optio accusamus blanditiis fugit asperiores illo impedit ad mollitia
                        accusantium dolorum facere, adipisci et voluptas maiores aliquam!
                        Suscipit, mollitia temporibus.</p>
                </div>

            </div>
        </>
    )
}