import React from "react";
// import github_logo from "../ContactUs/github.png";
// import linkedin_logo from "../ContactUs/linkedin.png";
// import nchlab from "../ContactUs/github_nchlab.png";
// import nazrath10r from "../ContactUs/github_nazrath10r.png";
import qmul_logo from "../ContactUs/QMUL_SBCS.png";
import nayam from "../ContactUs/nayam.png";
import nazrath from "../ContactUs/nazrath.png";
import conrad from "../ContactUs/conrad.png";
import miguel from "../ContactUs/miguel.png";
import Particles from 'react-particles-js';

const Project = (particlesOptions) => (
  <div>
    <Particles className="particles" params={particlesOptions} />
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
        alt="Nayam"
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

    </p>
    <p>
      <span style={{paddingLeft:"0px"}}>
      <button className="btn btn-outline-primary">Msc BioInformatics Project</button> &nbsp;
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
        alt="Nazrath"
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
      <button className="btn btn-outline-primary">Co-Dev</button> &nbsp;
      <button className="btn btn-outline-primary">RetroMiner</button> &nbsp;
      <br/>
      <br/>
      <button className="btn btn-outline-primary">Data Generator</button> &nbsp;
      <button className="btn btn-outline-primary">Supervisor</button> &nbsp;

    </p>
</div>
<div class="col-sm">
      <img
        alt="Conrad"
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

      <button className="btn btn-outline-primary">MSc Supervisor</button> &nbsp;
      <button className="btn btn-outline-primary">lab leader</button> &nbsp;
      <br/>
      <br/>
      <button className="btn btn-outline-primary">Funding</button> &nbsp;


    </p>
    </div>

    <div class="col-sm">
      <img
        alt="Miguel"
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

        <button className="btn btn-outline-primary">Retroelement collaborator</button> &nbsp;
        <br/>
        <br/>
      <button className="btn btn-outline-primary">Biological Insights</button> &nbsp;
    </p>
    </div>
  </div>
</div>

    <div className="container">
      <hr />
      <img alt="QMUL" className="contact_img" src={qmul_logo} />
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
