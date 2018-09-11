import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Footer.css";
import retrologo from '../Logo/Logo.png';
import '../Logo/Logo.css';

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
			<div className="whole-footer">
				<div id="">
					<Link to="/"><img src={retrologo} height={200} width={500} className="pb6" alt="logo"/></Link>
				</div>
       <div className="footer">

            <li>
                {links.map(({ page, to }) => (
                  window.location.href.includes(to)
                  ? <a key={page} href={to}>{page}</a>
                  : <Link key={page} to={to}>{page}</Link>))}

              </li>

					</div>

					<div className="footer2">

	             <li>
	                 {links2.map(({ page, to }) => (
	                   window.location.href.includes(to)
	                   ? <a key={page} href={to}>{page}</a>
	                   : <Link key={page} to={to}>{page}</Link>))}

	               </li>

	 					</div>
				</div>
    )};

export default withRouter(Footer);
