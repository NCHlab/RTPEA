import React, { Component } from "react";
import Humanimg from "./Human1.png";
import Svg1 from "./human_non_colourised.svg";
import Svg2 from "./human_colourised.svg";
import Svg3 from "./human_colourised_lung_grouped.svg";

import Humanimg2 from "./Human_W.png";
import Human_lung from "./Human_lung.png";
import Brain from "./Brain.png";
import Plot1 from "./plot1.png";
import Plot2 from "./plot2.png";
import "./Human.css";
import imagemap from "./imagemap";
import $ from "jquery";
import ImageMapper from "react-image-mapper";
import SVG from "react-inlinesvg";
import Loader from "react-loader";


let AREAS_MAP = {
  name: "map1",
  areas: [
    { shape: "rect", coords: [80,6,123,57], href: "https://www.google.co.uk" /* Brain */ },
    { shape: "circle", coords: [104,178,48] /* Lung */ },
    { shape: "poly", coords: [57,242,67,231,78,228,91,231,106,235,123,234,134,238,133,244,124,252,117,257,104,259,97,262,87,266,83,272,76,271,68,269,62,272,58,277,55,256] /* Liver */ },
    { shape: "poly", coords: [112,259,120,258,126,259,123,265,115,268,115,275,108,276,97,276,91,270,95,263] /* Pancreas */ },
    { shape: "poly", coords: [59,279,58,299,58,319,68,328,76,324,79,331,92,330,94,336,99,342,105,343,107,334,108,325,116,326,130,325,138,318,142,304,141,293,141,274,143,264,135,259,124,269,117,275,106,279,91,277,76,273,67,271] /* Intestine */ },
    { shape: "poly", coords: [87,340,86,348,93,349,113,351,117,344,113,338,102,345,93,338] /* Testes */ },
    { shape: "circle", coords: [363,166,17] /* Heart */ },
    { shape: "rect", coords: [311,184,398,202] /* Breast */ },
    { shape: "poly", coords: [329,252,321,266,322,279,327,284,333,284,339,282,340,292,359,284,377,287,383,285,392,282,394,269,391,259,383,252,337,251] /* Kidney */ },
    { shape: "poly", coords: [353,350,364,347,368,326,373,307,379,308,383,315,400,308,396,292,376,295,360,291,341,294,323,291,316,297,316,307,324,315,331,315,336,308,343,312,350,337] /* Uterus */ },
  ]
  };


class Human extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "false",
      highlight: false,
      index: "",
      x: 0,
      y: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {};

  MouseEnter = (area, index, event) => {
    this.setState({
      loading: "true",
      index: index
    });

    // console.log(index);
  };

  MouseLeave = () => {
    this.setState({ loading: "false" });
  };

  _onMouseMove = e => {
    this.setState({ x: e.screenX, y: e.screenY });
  };

  ImageArray = index => {
    if (index === 0) {
      return (
        <img
          src={Plot1}
          className="pb6 "
          alt="logo"
          height="450px"
          width="450px"
        />
      );
    } else if (index === 1) {
      return (
        <div className="moveleft">
          <img
            src={Plot1}
            className="pb6 "
            alt="logo"
            height="650px"
            width="450px"
          />;
        </div>
      );
    }
  };

  showimg = () => {
    // if (this.state.x > 600 && this.state.x < 650 && this.state.y > 140 && this.state.y < 180 ){
    //   return <img src={Plot1} className="pb6 " alt="logo" height="450px" width="450px"/>;
    // }
  };

  getid = () => {
    var coordsDiv = document.getElementById("lung");
    console.log(coordsDiv);
    // console.log("hi")
  };

  detectSvg = svgType => {
    if (svgType === "brain") {
      console.log("Brain has been identified");
    } else if (svgType === "lung") {
      console.log("lung has been identified");
    }
  };

  onClickHandler = e => {
    console.log("I'm clicked");
    var result_svg = e.target
    console.log(result_svg);
    console.log(result_svg.classList[1]);
    // console.log(result_svg.className.animVal);
    // console.log(result_svg.attributes[0].value);

  };

  svgWrapper = ({ dangerouslySetInnerHTML, className }) => {
    return (
      <span
        onClick={e => this.onClickHandler(e)}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        className={className}
      />
    );
  };

  render() {
    const { x, y } = this.state;
    return (
      // <div onMouseMove={this._onMouseMove.bind(this)}>

      <div className="ma4 mt0">
        <div className="container c1">
          <div className="human-img">
            <div className="go-left">
              <div id="human-svg-1">
                <SVG
                  src={Svg3}
                  uniquifyIDs={false}
                  className="foo"
                  wrapper={this.svgWrapper}
                />
              </div>
            </div>
          </div>
          {this.getid()}

          {this.showimg()}

          <h1>
            Mouse coordinates: {x} {y}
          </h1>

          <div className="inline-img">{this.ImageArray(this.state.index)}</div>
        </div>

        <h1>
          {this.state.loading}
          <br />
          {this.state.index}
        </h1>
        <br />
      </div>
    );
  }
}

export default Human;
