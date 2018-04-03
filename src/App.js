import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Particles from 'react-particles-js';
import './App.css';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Navigation/Home';
import Table from './components/Navigation/Table';
import Upload from './components/Navigation/Upload';
import Expression_Atlas from './components/Navigation/Expression_Atlas';
import Info from './components/Navigation/Info';
import Project from './components/Navigation/Project';

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
      "color": "#2600dc",
      "opacity": 0.8207265007852137,
      "width": 0.9469921162906312
    }
  }
}

const App = () => (
  <Router>
    <div>
      <div className="App">
        <header className="App-header">
          <Logo />
          <Navigation />
        </header>
        <Particles className="particles" params={particlesOptions} />
      </div>

      <Route exact path="/" component={Home} />
        <Route path="/table" component={Table} />
        <Route path="/upload" component={Upload} />
        <Route path="/expression_atlas" component={Expression_Atlas} />
        <Route path="/info" component={Info} />
        <Route path="/project" component={Project} />
    </div>
  </Router>
);







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
