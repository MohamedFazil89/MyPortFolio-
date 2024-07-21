import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/intro';
import Projects from './Components/Projects';
import React from 'react';

function App() {
  
  return (
      <div>

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
