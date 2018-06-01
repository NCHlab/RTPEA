// import Logo from './components/Logo/Logo';
// import Loadingbar from './components/Loading-bar/Loadingbar';

import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Navigation/Footer';
import Particles from 'react-particles-js';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Home from './components/Navigation/Home';
import Api from './components/Navigation/Api';
import Browse from './components/Navigation/Browse';
import BrowseDemo from './components/Navigation/Browse-demo';
import Visualise from './components/Navigation/Visualise';
import Expression_Atlas from './components/Navigation/Expression_Atlas';
import Info from './components/Navigation/Info';
import Contact from './components/Navigation/Contact';
import Loading from 'react-loading-bar'
import JSONPretty from 'react-json-pretty';
import SVG from 'react-inlinesvg';
import Loader from 'react-loader';
// import 'tachyons/css/tachyons.css';

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

        {/* <button
          type="button"
          onClick={this.onShow}>
          show
        </button>

        <button
          type="button"
          onClick={this.onHide}>
          hide
        </button> */}
        <div className="">
          {/* Displays the Navigation modules, which contains the logo and all links to the website*/}
          <Navigation />

          {/* Displays the particles that was defined earlier */}
          <Particles className="particles" params={particlesOptions} />
        </div>

        {/* Route defined, different paths lead to different JS files to be displayed.
          Some Props have also been passed through so that it is accessible in the other JS files */}
        <div className="paths">
          <Route exact path={"/"} component={() => <Home show={this.state.show} onShow={this.onShow} onHide={this.onHide}/>}/>
            <Route path={"/browse"} component={() => <Browse show={this.state.show} onShow={this.onShow} onHide={this.onHide}/>}/>
            <Route path="/Visualise" component={Visualise} />
            <Route path="/BrowseDemo" component={BrowseDemo} />
            <Route path={"/api"} component={Api} />
            <Route path="/info" component={Info} />
            <Route path="/contact" component={Contact} />
        </div>
        <div className="line-seperator"></div>
        <Footer />
      </div>
    </Router>
  );
  }
}









export default App;
