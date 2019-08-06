import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Footer.css";
import retrologo from '../Logo/Logo.png';
import '../Logo/Logo.css';


// const Footer = (props) => {
function Footer(props) {
    const { location } = props;

    return (
			<div className="whole-footer">
      
				<div id="" className="footer_logo">
					<Link to="/"><img src={retrologo} height={80} width={200} className="pb6" alt="logo"/></Link>
				</div>
       <div className="footer">

          This website was created as part of the individual project for the MSc Bioinformatics course at QMUL. <br/>
          For more information, check the <Link to="/info">info</Link> and <Link to="/contact">contact us page</Link>. The accompanying paper will be published soon.

					</div>

				</div>



    )};


export default withRouter(Footer);
