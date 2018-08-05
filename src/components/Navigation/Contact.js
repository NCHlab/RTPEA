import React, { Component } from "react";
import github_logo from "../ContactUs/github.png";
import linkedin_logo from "../ContactUs/linkedin.png";
import nchlab from "../ContactUs/github_nchlab.png";
import nazrath10r from "../ContactUs/github_nazrath10r.png";
import qmul_logo from "../ContactUs/QMUL_SBCS.png";
import nayam from "../ContactUs/nayam.png";
import nazrath from "../ContactUs/nazrath.png";
import conrad from "../ContactUs/conrad.png";
import miguel from "../ContactUs/miguel.png";

const Project = () => (
  <div>
    {/* <div className="contact_h1">
      <h1>Website Created by: Nayam Chowdhury</h1>
    </div>
    <div className="contact_h1">
      <h1>with help from Nazrath Nawaz</h1>
    </div> */}
    <div className="container col-lg-2">
      <h1>Contact Us</h1>
    </div>
    <div className="container">
      <hr />

      Email: m.a.n.chowdhury@se17.qmul.ac.uk / m.n.mohamednawaz@qmul.ac.uk / c.bessant@qmul.ac.uk
      <br/>
      Location: Queen Mary University of London, Mile End Rd, London E1 4NS
      <br/>
      Github: See Below
    </div>


    <div className="container">
      <hr />
    </div>



    <div className="container" style={{marginLeft:"20%"}}>

      <img
        className="contact_img"
        src={nayam}
        width="300px"
        height="300px"
      />

      <div className="description_style contact_img" style={{top:"400px"}}>
        <a href="https://github.com/nchlab">Github - NCHLAB</a>
      </div>
      <div className="description_style contact_img" style={{top:"450px"}}> Linkedin</div>
      <div className="description_style contact_img" style={{top:"500px"}}> Contact: m.a.n.chowdhury@se17.qmul.ac.uk</div>


      <p>
        <br/>
      <button className="btn btn-outline-primary">Lead Dev</button> &nbsp;
      <button className="btn btn-outline-primary">Website Creator</button> &nbsp;
      <button className="btn btn-outline-primary">JavaScript</button> &nbsp;
      <button className="btn btn-outline-primary">ReactJS</button> &nbsp;
      <button className="btn btn-outline-primary">MongoDB</button> &nbsp;
      <button className="btn btn-outline-primary">HTML</button> &nbsp;
      <button className="btn btn-outline-primary">CSS</button> &nbsp;
      <button className="btn btn-outline-primary">????</button> &nbsp;

    </p>
    <p>
      <span style={{paddingLeft:"250px"}}>
      <button className="btn btn-outline-primary">Msc BioInformatics</button> &nbsp;
      <button className="btn btn-outline-primary">????</button> &nbsp;
      <button className="btn btn-outline-primary">????</button> &nbsp;
    </span>

    </p>
    </div>

    <div className="container">
      <hr />
    </div>

    <div className="container" style={{marginLeft:"20%"}}>
      <div class="row">
    <div class="col-sm">
      <img
        style={{marginLeft:"20%"}}
        className="contact_img"
        src={nazrath}
        width="200px"
        height="200px"
      />

      <div className="contact_img description_style2" style={{top:"850px"}}>
        <a href="https://github.com/nazrath10r">Github - nazrath10r</a>
      </div>
      <div className="contact_img description_style2" style={{top:"900px"}}> Linkedin</div>
      <div className="contact_img description_style2" style={{top:"950px"}}> m.n.mohamednawaz@qmul.ac.uk</div>

      <p>
        <br/>
      <button className="btn btn-outline-primary">Co-Dev Supervisor</button> &nbsp;
      <button className="btn btn-outline-primary">RetroMiner Expert</button> &nbsp;
      <br/>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button className="btn btn-outline-primary">Data Generation</button> &nbsp;
    </p>
</div>
<div class="col-sm">
      <img
        style={{marginLeft:"20%"}}
        className="contact_img"
        src={conrad}
        width="200px"
        height="200px"
      />

      <div className="contact_img description_style2" style={{top:"850px"}}>
        <a href="https://github.com/">Github - Conrad Bessant</a>
      </div>
      <div className="contact_img description_style2" style={{top:"900px"}}> Linkedin</div>
      <div className="contact_img description_style2" style={{top:"950px"}}> c.bessant@qmul.ac.uk</div>

      <p>
        <br/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button className="btn btn-outline-primary">MSc Supervisor</button> &nbsp;
    </p>
    </div>

    <div class="col-sm">
      <img
        style={{marginLeft:"20%"}}
        className="contact_img"
        src={miguel}
        width="200px"
        height="200px"
      />

      <div className="contact_img description_style2" style={{top:"850px"}}>
        <a href="https://github.com/">Github - Miguel</a>
      </div>
      <div className="contact_img description_style2" style={{top:"900px"}}> Linkedin</div>
      <div className="contact_img description_style2" style={{top:"950px"}}> m.branco@qmul.ac.uk</div>

      <p>
        <br/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button className="btn btn-outline-primary">Biological Insights</button> &nbsp;
    </p>
    </div>
  </div>
</div>

    <div className="container">
      <hr />
    </div>



    <div className="contact_container">
      <div className="contact_img">
        <div className="contact_h1">
          <h1>Website Created by: Nayam Chowdhury</h1>
        </div>
        <div className="nchlab_container">
          <a href="http://github.com/nchlab">
            <img
              className="contact_img"
              src={nchlab}
              width="500px"
              height="250px"
            />
          </a>
          <img
            className="contact_img"
            src={linkedin_logo}
            width="500px"
            height="250px"
          />
        </div>
        <br />
      </div>

      <div className="contact_container">
        <div className="contact_img">
          <div className="contact_h1">
            <h1>Assistance from: Nazrath Nawaz</h1>
          </div>
          <div className="nazrath10r_container">
            <a href="http://github.com/nazrath10r">
              <img
                className="contact_img"
                src={nazrath10r}
                width="500px"
                height="250px"
              />
            </a>
            <img
              className="contact_img"
              src={linkedin_logo}
              width="500px"
              height="250px"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <hr />
      <img className="contact_img" src={qmul_logo} />
      <h2>Created at Queen Mary University of London, @BessantLab, SBCS</h2>

      <h2>MSC - BioInformatics</h2>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);

export default Project;
