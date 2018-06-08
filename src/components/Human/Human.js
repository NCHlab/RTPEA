import React, { Component } from "react";
import Humanimg from "./Human1.png";
import Svg1 from "./human_non_colourised.svg";
import Svg2 from "./human_colourised.svg";
import Svg3 from "./human_colourised_lung_grouped.svg";
import Humanimg2 from "./Human_W.png";
import Human_lung from "./Human_lung.png";
import Brain from "./Brain.png";
import Plot1 from "./plot1.png";
import Plot3 from "./plot3.png";
import Plot4 from "./plot4.png";
import Plot5 from "./plot5.png";
import Plot6 from "./plot6.png";
import "./Human.css";
import $ from "jquery";
import SVG from "react-inlinesvg";
import Loader from "react-loader";
import { LineChart, Line, BarChart, YAxis, XAxis,CartesianGrid, Tooltip, Legend } from 'recharts';




class Human extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "false",
      highlight: false,
      checked: false,
      index: "",
      svgType: "",
      x: 0,
      y: 0,

    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.detectSvg = this.detectSvg.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  // handleInputChange = event => {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //
  //   this.setState({
  //     [name]: value
  //   });
  // };

  componentDidMount = () => {};

  detectSvg = svgType => {
    if (svgType === "brain") {
      console.log("Brain has been identified")
      return (
        <img
          src={Plot1}
          className="pb6 nice-smooth"
          alt="logo"
          height="450px"
          width="450px"
        />
      );
    } else if (svgType === "lung") {
      console.log("lung has been identified");
      return (
          <img
            src={Plot3}
            className="pb6 "
            alt="logo"
            height="450px"
            width="450px"
          />
      );
    } else if (svgType === "liver") {
      console.log("liver has been identified");
      return (
          <img
            src={Plot4}
            className="pb6 "
            alt="logo"
            height="450px"
            width="650px"
          />
      );
    } else if (svgType === "heart") {
      console.log("heart has been identified");
      return (
          <img
            src={Plot5}
            className="pb6 "
            alt="logo"
            height="450px"
            width="650px"
          />
      );
    } else if (svgType === "uterus") {
      console.log("uterus has been identified");
      return (
          <img
            src={Plot6}
            className="pb6 "
            alt="logo"
            height="450px"
            width="650px"
          />
      );
    }
  };

  handleChange= () => {
   this.setState({
     checked: !this.state.checked
   })
 }

  onClickHandler = e => {
    this.setState({ svgType: e.target.classList[1]});
    // this.detectSvg()
    // console.log("I'm clicked");
    // console.log(result_svg);
    // console.log(e.target.classList[1]);
    // console.log(result_svg.className.animVal);
    // console.log(result_svg.attributes[0].value);
  };

  svgWrapper_onClick = ({ dangerouslySetInnerHTML, className }) => {
      return (
        <span
          onClick={e => this.onClickHandler(e)}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          className={className}
        />
      );
  };

  svgWrapper_mouseOver = ({ dangerouslySetInnerHTML, className }) => {
    return (
      <span
        onMouseOver={e => this.onClickHandler(e)}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        className={className}
      />
    );
  };

check_event = (e) =>{
  console.log(e)
}


  render() {

    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

    return (
      <div>
      <input type="checkbox" checked={ this.state.checked } onChange={this.handleChange}/>
        <label> Enable Click to display</label>
      <br/>
      <br/>
      <div className="ma4 mt0">

        <div className="container c1">
          <div className="human-img">
            <div className="go-left">
              <div id="human-svg-1">
                <SVG
                  src={Svg3}
                  uniquifyIDs={true}
                  wrapper={this.state.checked ? this.svgWrapper_onClick : this.svgWrapper_mouseOver}
                />
              </div>
            </div>
          </div>

          <div className="inline-img">{this.detectSvg(this.state.svgType)}</div>
        </div>

        <h1>
          <br />

           {/* <button type="button" onClick={() => console.log(this.state.checked)}>Click Me!</button> */}

        </h1>
        <br />
      </div>
      <BarChart />

      {/* <div className="background-body2">
        <LineChart width={600} height={300} data={data} onClick={e => this.check_event(e)}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
         <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
        </LineChart>
      </div> */}
    </div>
    );
  }
}

export default Human;
