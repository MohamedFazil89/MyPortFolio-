import React, { useState, useEffect } from 'react';
import './App.css';

const Layout = ({ children }) => {
  const [coordinates, setCoordinates] = useState({ pageX: 0, pageY: 0 });
  const [mouseVisible, setMouseVisible] = useState(true);

  const handleMouseMove = (e) => {
    setTimeout(() =>{
      setCoordinates({ 
        pageX: e.clientX, 
        pageY: e.clientY,
     });

    }, 100)
    
  };

  const handleMouseOut = () => {
    setMouseVisible(false);
  };

  const handleMouseEnter = () => {
    setMouseVisible(true);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div>
      {mouseVisible && (
        <div
          className="curser"
          style={{
            left: `${coordinates.pageX}px`,
            top: `${coordinates.pageY}px`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default Layout;
