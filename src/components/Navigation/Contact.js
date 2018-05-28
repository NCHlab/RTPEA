import React, { Component } from 'react';
import github_logo from '../ContactUs/github.png';
import linkedin_logo from '../ContactUs/linkedin.png';
import nchlab from '../ContactUs/github_nchlab.png';
import nazrath10r from '../ContactUs/github_nazrath10r.png';


const Project = () => (
  <div>

    {/* <div className="contact_h1">
      <h1>Website Created by: Nayam Chowdhury</h1>
    </div>
    <div className="contact_h1">
      <h1>with help from Nazrath Nawaz</h1>
    </div> */}
	<div className="contact_container">

    <div className="contact_img">
      <div className="contact_h1">
        <h1>Website Created by: Nayam Chowdhury</h1>
      </div>
      <div className="nchlab_container">

      <a href="http://github.com/nchlab">
        <img className="contact_img" src={nchlab} width="600px" height="300px"/>
      </a>
      <img className="contact_img" src={linkedin_logo} width="600px" height="300px"/>
    </div>
    <br/>
  </div>


    <div className="contact_container">
      <div className="contact_img">
      <div className="contact_h1">
        <h1>with help from Nazrath Nawaz</h1>
      </div>
    <div className="nazrath10r_container">

      <a href="http://github.com/nazrath10r">
        <img className="contact_img" src={nazrath10r} width="600px" height="300px"/>
      </a>
      <img className="contact_img" src={linkedin_logo} width="600px" height="300px"/>
    </div>
  </div>
    </div>
	</div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  </div>
);

export default Project;
