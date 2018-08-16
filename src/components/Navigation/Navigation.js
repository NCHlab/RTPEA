import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navigation.css";
import '../Logo/Logo.css';
import retrologo from '../Logo/Logo.png';
import Tilt from 'react-tilt'
//

// const Navigation = (props) => {
function Navigation(props) {
    const { location } = props;
    const links = [
            {
            page: 'Home',
            to: '/home'
        },
        {
            page: 'Browse',
            to: '/browse'
        },
        {
            page: 'Visualise',
            to: '/visualise'
        },
        {
            page: 'Download',
            to: '/download',
            ex1:"api",
            ex2:"exp_params"
        },
        {
            page: 'Info',
            to: '/info'
        },
        {
            page: 'Contact Us',
            to: '/contact'
        }
    ];


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
            <li><a>
                {links.map(({ page, to, ex1, ex2 }) => (
                  window.location.href.includes(ex1) || window.location.href.includes(ex2) ? <a href={to} className="active">{page}</a> :
                  window.location.href.includes(to)
                  ? <a href={to} className="active">{page}</a>
                  : <Link to={to}>{page}</Link>))}

                </a>
              </li>
            </ul>

          </nav>


    )};


export default withRouter(Navigation);
