import React from "react";
import "../styles/footer.css";

export default function Footer(){
    return(
        <footer>
            <h1>👋 Thanks for stopping by! Here is more of me if you are interested :)</h1>
            <section>
                <div className="section Pages">
                    <h2>Pages</h2>
                    <p>Home</p>
                    <p>Service</p>
                    <p>About</p>
                </div>
                
                <div className="section Works">
                    <h2>Works</h2>
                    <p>Portfolio</p>

                </div>
                <div className="section Connect">
                    <h2>Let's Connect</h2>
                    <a href="www.linkedin.com">LinkedIn</a>
                    <a href="www.github.io">GitHub</a>

                </div>
            </section>
        </footer>
    )
}