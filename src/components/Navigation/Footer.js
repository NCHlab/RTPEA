import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footer">

      <nav>
        <ul>
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
        Footer
        FOOTER
        FOOTER
        FOOTER

      </nav>

  </div>

  );
}


export default Footer;
