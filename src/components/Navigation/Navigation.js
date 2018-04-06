import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navigation.css";
import '../Logo/Logo.css';
import retrologo from '../Logo/Logo.png';

import Tilt from 'react-tilt'

const Navigation = () => {
  return (
    <nav>
      <div id="logoimg" className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2 " options={{ max : 50 }} style={{ height: 100, width: 180 }} >
         <div className="Tilt-inner">
           <Link to="/"><img src={retrologo} className="pb6" alt="logo"/></Link>
         </div>
        </Tilt>


      </div>
      <ul class="menu">
        <li>
          <a><Link to="/">Home</Link></a>
        </li>
        <li>
          <a><Link to="/table">Table</Link></a>
        </li>
        <li>
          <a><Link to="/upload">Upload</Link></a>
        </li>
        <li>
          <a><Link to="/expression_atlas">Expression Atlas</Link></a>
        </li>
        <li>
          <a><Link to="/info">Info</Link></a>
        </li>
        <li>
          <a><Link to="/project">Project</Link></a>
        </li>
      </ul>
    </nav>

  );
}


export default Navigation;
