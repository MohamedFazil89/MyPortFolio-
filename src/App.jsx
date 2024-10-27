import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/intro';
import React, { useState, useEffect} from 'react';
import Modal from './Model';
function App() {
  const [isShown, setIsShown] = useState(false);
  useEffect(() =>{
    setTimeout(() =>{
      setIsShown(true);
    }, 2000)

  })


  return (
    <div>
      {/* { */}
        <div className="circles">
        </div>
      {/* } */}
      { isShown ? <Navbar /> : ""}
     { isShown ? <Intro fName="Mohamed"
        lName="Fazil"
        title="and Innovator with a passion for creating impactful digital experiences."
      /> : ""}
      <Modal />








    </div>
  );
}

export default App;
