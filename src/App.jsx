import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/intro';
import Projects from './Components/Projects';
import React, { useState } from 'react';

function App() {
  const [coordinates, setCoordinates] = useState({ pageX: 0, pageY: 0});
  const [mousevisible, setMouseVisible] = useState(true);
  const handleMouseMove = (e) =>{
    setCoordinates({ pageX: e.pageX, pageY: e.pageY});

  }

  const handleMouseOut = () =>{
    setMouseVisible(false);
  }
  const handleMouseEnter = () =>{
    setMouseVisible(true);
  }
  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseOut}  onMouseEnter={handleMouseEnter}>
    { mousevisible && <div  className="curser" style={{
      left: `${coordinates.pageX}px`,
      top: `${coordinates.pageY}px`,
    }}></div>}
    <Navbar />
    <Intro fName="Mohamed"
     lName="Fazil" 
     title="I'm a Designer, Developer, and Innovator with a passion for creating impactful digital experiences."
      />
      <Projects />

     
      
      


    


    </div>
  );
}

export default App;
