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
import Visualise from './components/Navigation/Visualise';
import Expression_Atlas from './components/Navigation/Expression_Atlas';
import Info from './components/Navigation/Info';
import Contact from './components/Navigation/Contact';
import Loading from 'react-loading-bar'
import JSONPretty from 'react-json-pretty';

import './App.css';
import 'react-loading-bar/dist/index.css'
import 'react-table/react-table.css'



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

  onShow = ()=> {
    this.setState({ show: true })
  }

  onHide = ()=> {
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
          {/* <Loadingbar
            show={true}
            color="red"
            change={false}
            showSpinner={true}/> */}
          <Navigation />
          {/* <Logo /> */}
          <Particles className="particles" params={particlesOptions} />
        </div>

        <div className="paths">
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path={"/"} component={() => <Home show={this.state.show} onShow={this.onShow} onHide={this.onHide}/>}/>
            <Route path={"/browse"} component={() => <Browse show={this.state.show} onShow={this.onShow} onHide={this.onHide}/>}/>
            <Route path="/Visualise" component={Visualise} />
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








//export default BasicExample;



// class App extends Component {
//   componentDidMount() {
//     fetch("http://localhost:3000/")
//       .then(response => response.json())
//       .then(console.log)
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Logo />
//           <Navigation />
//         </header>
//         <p className="App-intro">
//             <h1 className="">Welcome to Retro Data Portal</h1>
//             <Particles className="particles" params={particlesOptions} />
//         { /*<Human />*/}
//         </p>
//       </div>
//     );
//   }
// }

export default App;



{/* this.state.route === "homepage" ?
    <homepage />*/}
