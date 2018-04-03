import React from 'react';
import retrologo from './Logo.png';
import './Logo.css';
import Tilt from 'react-tilt'



const Logo = () => {
  return (
    <div id="logoimg" className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2 " options={{ max : 50 }} style={{ height: 100, width: 180 }} >
       <div className="Tilt-inner">
         <img src={retrologo} className="pb6" alt="logo" height="200" width="200"/>
       </div>
      </Tilt>
    </div>
  );
}

export default Logo;
