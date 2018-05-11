import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navigation.css";
import '../Logo/Logo.css';
import retrologo from '../Logo/Logo.png';

import Tilt from 'react-tilt'

const Navigation = () => {

  function refreshPage(){
    setTimeout(function(){ window.location.reload(); }, 0);
}


  return (
    <nav>
      <div id="logoimg" className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2 " options={{ max : 50 }} style={{ height: 100, width: 180 }} >
         <div className="Tilt-inner">
           <Link to="/"><img src={retrologo} height={100} width={250} className="pb6" alt="logo"/></Link>
         </div>
        </Tilt>



      </div>
      <ul class="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/table">Table</Link>
        </li>
        <li>
          <Link to="/visualisation">Visualisation</Link>
        </li>
        <li>
          <Link to="/api">Api</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
    </nav>

  );
}
export default Navigation;
          {/* <a><Link to="/api">API</Link></a> */}
          {/* <a><Link to="/" onClick={ refreshPage }>Home</Link></a> */}
          {/* <a><Link to="/" onClick={() => {if (window.location.href === "/") {this.refreshPage()}}}>Home</Link></a> */}
{/* <a><Link to="/api" onClick={() => {if (window.location.href === "/api") {refreshPage()}}}>api2</Link></a>

<a> const link = href === '/api' ? <a href={href}>link text</a> : <Link to={derivedLinkLocation}>link text</Link> </a> */}
