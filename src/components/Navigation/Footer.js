import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Footer.css";
import retrologo from '../Logo/Logo.png';
import '../Logo/Logo.css';


// const Footer = (props) => {
function Footer(props) {
    const { location } = props;
    const links = [
            {
            page: 'Home',
            to: '/'
        },
        {
            page: 'Browse',
            to: '/browse'
        },
        {
            page: 'Visualise',
            to: '/visualise'
        }
    ];

		const links2 = [
            {
            page: 'API',
            to: '/api'
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
			<div className="inline-text">
				<div id="">
					<Link to="/"><img src={retrologo} height={200} width={500} className="pb6" alt="logo"/></Link>
				</div>
       <div className="footer">

            <li><a>
                {links.map(({ page, to }) => (
                  window.location.href.includes(to)
                  ? <a href={to}>{page}</a>
                  : <Link to={to}>{page}</Link>))}
                </a>
              </li>

					</div>

					<div className="footer2">

	             <li><a>
	                 {links2.map(({ page, to }) => (
	                   window.location.href.includes(to)
	                   ? <a href={to}>{page}</a>
	                   : <Link to={to}>{page}</Link>))}
	                 </a>
	               </li>

	 					</div>
				</div>



    )};


export default withRouter(Footer);
