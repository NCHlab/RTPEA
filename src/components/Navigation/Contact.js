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
            <img className="contact_img" src={nchlab} width="500px" height="250px"/>
          </a>
          <img className="contact_img" src={linkedin_logo} width="500px" height="250px"/>
        </div>
        <br/>
      </div>


        <div className="contact_container">
          <div className="contact_img">
          <div className="contact_h1">
            <h1>Assistance from: Nazrath Nawaz</h1>
          </div>
        <div className="nazrath10r_container">

          <a href="http://github.com/nazrath10r">
            <img className="contact_img" src={nazrath10r} width="500px" height="250px"/>
          </a>
          <img className="contact_img" src={linkedin_logo} width="500px" height="250px"/>
        </div>
      </div>
    </div>


	</div>

  <div className="container">
    <h2>Created at Queen Mary University of London, BessantLab, SBCS</h2>
    
    <h2>MSC - BioInformatics</h2>
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
