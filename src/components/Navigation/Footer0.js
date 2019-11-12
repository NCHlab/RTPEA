import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<nav>
				<ul>
					<li>
						<a>
							<Link to="/">Home</Link>
						</a>
					</li>
					<li>
						<a>
							<Link to="/table">Table</Link>
						</a>
					</li>
					<li>
						<a>
							<Link to="/upload">Upload</Link>
						</a>
					</li>
					<li>
						<a>
							<Link to="/expression_atlas">Expression Atlas</Link>
						</a>
					</li>
					<li>
						<a>
							<Link to="/info">Info</Link>
						</a>
					</li>
					<li>
						<a>
							<Link to="/project">Project</Link>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Footer;



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
			<div className="whole-footer">
				<div id="" className="footer_logo">
					<Link to="/"><img src={retrologo} height={80} width={200} className="pb6" alt="logo"/></Link>
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
