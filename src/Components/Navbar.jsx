import React  from "react";
// import Logo from "../assets/F-removebg-preview.png"
import '../styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){

    // function handelMenu(){
    //     const widths = width === 0 ? 20 : 0;
    //     setWidth(widths);
        
    // }
 

    return(
        <nav>
            <input type="checkbox" id="slidebar-action"/>
            {/* style={{ width: `${width}%`}} */}
            <ul className="SlideBar" >
            <label for="slidebar-action"><li className="close-menu"> <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li></label>
                <li><Link to="/" className="Link">Home</Link></li>
                <li><Link to="/Services"  className="Link">Service</Link></li>
                <li><Link to="/Portfolio"  className="Link">Portfolio</Link></li>
                <li><Link to="/About" className="Link">About</Link></li>
                <li><Link to="/" className="Link">Contact me</Link></li>
            </ul>
            <ul className="Nabbar">
                {/* <li><img src={Logo} alt="Logo"  className="logo" /></li> */}
                <li className="Role"></li>
                <li className="leftbar"> <Link to="/" className="Link">Home</Link>  </li>
                <li className="leftbar"> <Link to="/Services" className="Link"> Service</Link></li>
                <li className="leftbar"><Link to="/Projects" className="Link"> Portfolio</Link></li>
                <li className="leftbar"><Link to="/About" className="Link"> About</Link></li>
                <li className="leftbar"><Link to="/Contact" className="Link">Contact me</Link></li>
                <label for="slidebar-action"><li className="menu"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li></label>

            </ul>
        </nav>
    )
}

export default Navbar;