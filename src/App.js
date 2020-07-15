// import Logo from './components/Logo/Logo';
// import Loadingbar from './components/Loading-bar/Loadingbar';
// import BrowseDemo from './components/Navigation/Browse-demo';
// import Visualisedemo from './components/Navigation/Visualisedemo';
// import 'tachyons/css/tachyons.css';

import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Navigation/Footer';
// import Particles from 'react-particles-js';
// import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import Home from './components/Navigation/Home';
import Api from './components/Navigation/Api';
import Browse from './components/Navigation/Browse';
import Browse2 from './components/Navigation/Browse2';
import Visualise from './components/Navigation/Visualise';
// import Expression_Atlas from './components/Navigation/Expression_Atlas';
import Info from './components/Navigation/Info';
import Contact from './components/Navigation/Contact';
import Status from './components/Navigation/Status';
import Ideogram from './components/Navigation/Ideogram';
import Ideogram_loci from './components/Navigation/Ideogram_loci';
import Sequence from './components/Navigation/Sequence';
import Download from './components/Navigation/Download';
import Homeredirect from './components/Navigation/Homeredirect';

import Loading from 'react-loading-bar'
// import JSONPretty from 'react-json-pretty';
// import SVG from 'react-inlinesvg';
// import Loader from 'react-loader';


import './App.css';
import 'react-loading-bar/dist/index.css'
import 'react-table/react-table.css'


// Particle options used for background dynamic movement of particles
const particlesOptions = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#cfd1d3",
      "opacity": 0.8207265007852137,
      "width": 0.9469921162906312
    }
  }
}

class App extends Component{

  constructor(props){
   super(props)
   this.state = {
    show: false,
    isLoading: true,
    urlSource:"http://localhost:3001", //The API Location domain
    // urlSource:"https://api.rtpea.com",
    urlSource2:"http://localhost:3000", // The current server frontend hosting domain
    // urlSource2:"https://rtpea.com",
  };
  }

  // sets state to true, which then displays the loading bar
  onShow = () => {
    this.setState({ show: true })
  }

// sets state to false, which then removes the loading bar
  onHide = () => {
    this.setState({ show: false })
  }

    // <Table show={this.state.show} onShow={this.onShow} onHide={this.onHide}/>
  render(){
    return(
    <Router>
      <div>
        <Loading
          show={this.state.show}
          color="orange"
          showSpinner={true}
        />

        <div className="">
          {/* Displays the Navigation modules, which contains the logo and all links to the website*/}
          <Navigation />

          {/* Displays the particles that was defined earlier */}
          {/* <Particles className="particles" params={particlesOptions} /> */}
        </div>

        {/* Route defined, different paths lead to different JS files to be displayed.
          Some Props have also been passed through so that it is accessible in the other JS files */}
        <div className="paths">
          <Switch>
            <Route exact path={"/"} component={Homeredirect} />
            <Route exact path={"/home"} component={() => <Home show={this.state.show} onShow={this.onShow} onHide={this.onHide} urlSource={this.state.urlSource} urlSource2={this.state.urlSource2} particlesOptions={particlesOptions}/>}/>
            <Route exact path={"/browse"} render={(props) => (<Browse {...props} urlSource={this.state.urlSource} urlSource2={this.state.urlSource2}/>)}/>
            <Route exact path="/browse/:id" render={(props) => (<Browse2 {...props} urlSource={this.state.urlSource} urlSource2={this.state.urlSource2}/>)}/>
            <Route exact path="/Visualise" render={(props) => (<Visualise {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/Visualise/:id" render={(props) => (<Visualise {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/api" render={(props) => (<Api {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/info" render={(props) => (<Info {...props}/>)}/>
            <Route exact path="/contact" render={(props) => (<Contact {...props} particlesOptions={particlesOptions}/>)}/>
            <Route exact path="/Download" render={(props) => (<Download {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/ideogram" render={(props) => (<Ideogram {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/ideogram/:id" render={(props) => (<Ideogram {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/loci_ideogram" render={(props) => (<Ideogram_loci {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/loci_ideogram/:id" render={(props) => (<Ideogram_loci {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/sequence" render={(props) => (<Sequence {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/sequence/:id" render={(props) => (<Sequence {...props} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/status" render={(props) => (<Status {...props} error_code={200} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/status/403" render={(props) => (<Status {...props} error_code={403} urlSource={this.state.urlSource} />)}/>
            <Route exact path="/status/404" render={(props) => (<Status {...props} error_code={404} urlSource={this.state.urlSource} />)}/>
            <Route exact path="*" render={(props) => (<Status {...props} error_code={404.1} urlSource={this.state.urlSource} />)}/>
          </Switch>

        </div>
        <div className="footer-line-seperator"></div>
        <Footer />
      </div>
    </Router>
  );
  }
}


export default App;
