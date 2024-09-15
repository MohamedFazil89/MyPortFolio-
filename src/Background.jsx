import React, { useEffect, useState } from "react";
import "./styles/background.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

export default function BackGround({ children }) {
    const [Top, setTop] = useState(0);
    const [Left, setLeft] = useState(0);
    const [Top2, setTop2] = useState(0);
    const [Left2, setLeft2] = useState(0);
    const [Top3, setTop3] = useState(0);
    const [Left3, setLeft3] = useState(0);

        useEffect(() =>{
            setTimeout(() =>{
                const TopVal = Math.random() * 500;
                const LeftVal = Math.random() * 500;
                setTop(TopVal);
                setLeft(LeftVal);
            },1000)
        
            setTimeout(() =>{
                const TopVal2 = Math.random() * 500;
                const LeftVal2 = Math.random() * 500;
                setTop2(TopVal2);
                setLeft2(LeftVal2);
            },2000)
        
            setTimeout(() =>{
                const TopVal3 = Math.random() * 500;
                const LeftVal3 = Math.random() * 500;
                setTop3(TopVal3);
                setLeft3(LeftVal3);
            },4000)
    
        })
    


    return (
        <div>
            <div className="circle" style={{ top: Top, left: Left}} >
            {/* <FontAwesomeIcon icon={faBitcoin} color="gold" opacity={0.2} scale={10} /> */}
            </div>
            <div className="circle" style={{ top: Top2, left: Left2}} >
            {/* <FontAwesomeIcon icon={faBitcoin} color="gold" opacity={0.2} /> */}
            </div>
            <div className="circle" style={{ top: Top3, left: Left3}} >
            {/* <FontAwesomeIcon icon={faBitcoin} color="gold" opacity={0.2} /> */}
            </div>
            <div className="circle" style={{ bottom: Top3, left: Left3}} >
            {/* <FontAwesomeIcon icon={faBitcoin} color="gold" opacity={0.2} /> */}
            </div>
            <div className="circle2" style={{ top: Top, right: Left}} >
            {/* <FontAwesomeIcon icon={faBitcoin} color="gold" opacity={0.2} /> */}
            </div>
            <div className="circle2" style={{ top: Top2, right: Left2}} >
            {/* <FontAwesomeIcon icon={faBitcoin} color="gold" opacity={0.2} /> */}
            </div>
            <div className="circle2" style={{ top: Top3, right: Left3}} >
            {/* <FontAwesomeIcon icon={faBitcoin} color="gold" opacity={0.2} /> */}
            </div>
            <div className="circle2" style={{ bottom: Top3, right: Left3}} >
            {/* <FontAwesomeIcon icon={faBitcoin} color="gold" opacity={0.2} /> */}
            </div>
            

            




            {children}
        </div>
    )
}