import React, { Component } from "react";
// import github_logo from "../ContactUs/github.png";
import linkedin_logo from "../ContactUs/linkedin1.png";
import nchlab from "../ContactUs/github_nchlab1.png";
import nazrath10r from "../ContactUs/github_nazrath10r_1.png";
import qmul_logo from "../ContactUs/QMUL_SBCS.png";
import background_dark from "../ContactUs/Background-dark.png"
import twitter_logo from "../ContactUs/twitter.png"
import sbcs_logo from "../ContactUs/sbcs_logo.png"

import nayam_text from "../ContactUs/nayam_text.png"
import nazrath_text from "../ContactUs/nazrath_text.png"
import conrad_text from "../ContactUs/conrad_text.png"
import miguel_text from "../ContactUs/miguel_text.png"
import paul_text from "../ContactUs/paul_text.png"

import nayam from "../ContactUs/nayam.png";
import nazrath from "../ContactUs/nazrath.png";
import conrad from "../ContactUs/conrad.png";
import miguel from "../ContactUs/miguel.png";
import paul from "../ContactUs/paul.png";
// import Particles from 'react-particles-js';

const Project = (particlesOptions) => (
  <div className="container">
    {/* <Particles className="particles" params={particlesOptions} />
    <h1>Contact Us</h1>*/}
    <div className="container col-lg-3 padding">

    </div>

    <div id="carouselControls" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselControls" data-slide-to="0" className="active"></li>
        <li data-target="#carouselControls" data-slide-to="1"></li>
        <li data-target="#carouselControls" data-slide-to="2"></li>
        <li data-target="#carouselControls" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">

      <div className="carousel-item active">
        <img className="d-block w-100" src={qmul_logo} alt="First slide" height='100px' width='120px'/>
        <div className="carousel-caption">
          <h3>MSC - BioInformatics</h3>
          Created at Queen Mary University of London, @BessantLab, SBCS
        </div>
      </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={background_dark} alt="Second slide" height='100px'/>
          <div className="carousel-caption">
            <h3>GitHub Repository</h3>
            <a href="https://github.com/NCHlab/RTPEA">https://github.com/NCHlab/RTPEA</a>
          </div>
        </div>


        <div className="carousel-item">
          <img className="d-block w-100" src={background_dark} alt="Third slide" height='100px'/>
          <div className="carousel-caption">
            <h3>Email</h3>
            admin@rtpea.com
          </div>
             {/*m.a.n.chowdhury@se17.qmul.ac.uk / m.n.mohamednawaz@qmul.ac.uk / c.bessant@qmul.ac.uk*/}

        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={background_dark} alt="fourth slide" height='100px'/>
          <div className="carousel-caption">
            <h3>Location:</h3>
            Queen Mary University of London, Mile End Rd, London E1 4NS
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span classNameName="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span classNameName="sr-only">Next</span>
      </a>
    </div>



    <div className="padding_contact_center">
    <div className="main_user_border">
      <img className="contact_img" src={nayam} alt="nayam" width="250px" height="250px"/>
      <a href="http://nayamc.com">
        <img className="contact_img" src={nayam_text} alt="Lead Dev" height="170px"/>
      </a>
      <a href="http://github.com/nchlab">
        <img className="contact_img" src={nchlab} alt="github" height="170px"/>
      </a>
      <a href="http://linkedin.com">
        <img className="contact_img" src={linkedin_logo} alt="linkedin" height="170px"/>
      </a>
      <a href="http://twitter.com">
        <img className="contact_img" src={twitter_logo} alt="twitter" height="170px"/>
      </a>
      </div>


      <div className="secondary_user_border">
          <img className="contact_img" src={nazrath} alt="nazrath" width="250px" height="250px"/>
          <img className="contact_img" src={nazrath_text} alt="RetroMiner / Data Gen" height="170px"/>
          <a href="http://github.com/nazrath10r">
            <img className="contact_img" src={nazrath10r} alt="github" height="170px"/>
          </a>
          <a href="http://linkedin.com">
            <img className="contact_img" src={linkedin_logo} alt="linkedin" height="170px"/>
          </a>
          <a href="https://www.qmul.ac.uk/sbcs/staff/nazrathnawaz.html">
            <img className="contact_img" src={sbcs_logo} alt="twitter" height="170px"/>
          </a>


          {/* <div className="carousel-caption">
            <h3>Email</h3>
            m.a.n.chowdhury@se17.qmul.ac.uk / m.n.mohamednawaz@qmul.ac.uk / c.bessant@qmul.ac.uk
          </div> */}


          <img className="contact_img" src={conrad} alt="conrad" width="250px" height="250px"/>
          <img className="contact_img" src={conrad_text} alt="RetroMiner / Data Gen" height="170px"/>
          <a href="https://bezzlab.github.io/">
            <img className="contact_img" src={linkedin_logo} alt="linkedin" height="170px"/>
          </a>
          <a href="http://twitter.com">
            <img className="contact_img" src={twitter_logo} alt="twitter" height="170px"/>
          </a>

          <a href="https://www.qmul.ac.uk/sbcs/staff/conradbessant.html">
            <img className="contact_img" src={sbcs_logo} alt="twitter" height="170px"/>
          </a>
          {/* <div className="carousel-caption">
            <h3>Location:</h3>
            Queen Mary University of London, Mile End Rd, London E1 4NS
          </div> */}

          <img className="contact_img" src={miguel} alt="miguel" width="250px" height="250px"/>
          <img className="contact_img" src={miguel_text} alt="RetroMiner / Data Gen" height="170px"/>
          <a href="https://www.qmul.ac.uk/blizard/staff/centre-for-genomics-and-child-health/staff/miguel-branco.html">
            <img className="contact_img" src={sbcs_logo} alt="twitter" height="170px"/>
          </a>
          {/* <div className="carousel-caption">
            <h3>MSC - BioInformatics</h3>
            Created at Queen Mary University of London, @BessantLab, SBCS
          </div> */}
          <br/>

          <img className="contact_img" src={paul} alt="paul hurd" width="250px" height="250px"/>
          <img className="contact_img" src={paul_text} alt="RetroMiner / Data Gen" height="170px"/>
          <a href="https://www.qmul.ac.uk/sbcs/staff/paulhurd.html">
            <img className="contact_img" src={sbcs_logo} alt="twitter" height="170px"/>
          </a>
          {/* <div className="carousel-caption">
            <h3>MSC - BioInformatics</h3>
            Created at Queen Mary University of London, @BessantLab, SBCS
          </div> */}
          </div>
        </div>

      {/*
        <a href="http://linkedin.com">
          <img className="contact_img" src={linkedin_logo} alt="linkedin" height="170px"/>
        </a>
        <a href="http://twitter.com">
          <img className="contact_img" src={twitter_logo} alt="twitter" height="170px"/>
        </a>
        <a href="http://linkedin.com">
          <img className="contact_img" src={linkedin_logo} alt="linkedin" height="170px"/>
        </a>
        <a href="http://twitter.com">
          <img className="contact_img" src={twitter_logo} alt="twitter" height="170px"/>
        </a>*/}


















    {/* <div className="container">
      <hr />
      <img className="contact_img" src={qmul_logo} />
      <h2>Created at Queen Mary University of London, @BessantLab, SBCS</h2>

      <h2>MSC - BioInformatics</h2>
    </div> */}

  </div>
);

export default Project;
