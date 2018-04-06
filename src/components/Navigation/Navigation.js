import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navigation.css";


const Navigation = () => {
  return (
    <nav>
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
