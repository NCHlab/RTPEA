import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Humanimg from "./Human1.png";
import Svg1 from "./human_non_colourised.svg";
import Svg2 from "./human_colourised.svg";
import Svg3 from "./human_colourised_lung_grouped.svg";
import Humanimg2 from "./Human_W.png";
import Human_lung from "./Human_lung.png";
import L1Chart from "../Images/L1-Identifications.png";
import Brain from "./Brain.png";
import Plot1 from "./plot1.png";
import Plot3 from "./plot3.png";
import Plot4 from "./plot4.png";
import Plot5 from "./plot5.png";
import Plot6 from "./plot6.png";
import brain_data from "../Files/brain.json";
import lung_data from "../Files/lung.json";
import liver_data from "../Files/liver.json";
import uterus_data from "../Files/uterus.json";
import breast_data from "../Files/breast.json";
import heart_data from "../Files/heart.json";
import intestine_data from "../Files/intestine.json";
import kidney_data from "../Files/kidney.json";
import pancreas_data from "../Files/pancreas.json";
import testes_data from "../Files/testes.json";
import "./Human.css";
import $ from "jquery";
import SVG from "react-inlinesvg";
import Loader from "react-loader";
import { LineChart, Line, BarChart, Bar, YAxis, XAxis,CartesianGrid, Tooltip, Legend } from 'recharts';
import Browse from '../Navigation/Browse';




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
      chartWidth:800,
      chartHeight: 600,
      yWidth: 120,
      whiteFill:{ fill: 'white', fontSize: 14},
      brain_data:brain_data,
      lung_data:lung_data,
      liver_data:liver_data,
      uterus_data:uterus_data,
      breast_data:breast_data,
      heart_data:heart_data,
      intestine_data:intestine_data,
      kidney_data:kidney_data,
      pancreas_data:pancreas_data,
      testes_data:testes_data,


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
        <div>
          <BarChart layout="vertical"  width={this.state.chartWidth} height={this.state.chartHeight} data={this.state.brain_data}>
            <XAxis  type="number"/>
            <YAxis dataKey="name" type="category" width={this.state.yWidth} tick={this.state.whiteFill} />
            <Tooltip />
            <Bar type="monotone" dataKey="A" barSize={30} fill="#8884d8"/>
            <Bar type="monotone" dataKey="B" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="C" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="D" barSize={30} fill="#8884d8" label="test" />
          </BarChart>
        </div>
        // <img
        //   src={Plot1}
        //   className="pb6 nice-smooth"
        //   alt="logo"
        //   height="450px"
        //   width="450px"
        // />
      );
    } else if (svgType === "lung") {
      console.log("lung has been identified");
      return (
        <div>
          <BarChart layout="vertical"  width={this.state.chartWidth} height={this.state.chartHeight} data={this.state.lung_data}>
            <XAxis  type="number"/>
            <YAxis dataKey="name" type="category" width={this.state.yWidth} tick={this.state.whiteFill} />
            <Tooltip />
            <Bar type="monotone" dataKey="A" barSize={30} fill="#8884d8"/>
            <Bar type="monotone" dataKey="B" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="C" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="D" barSize={30} fill="#8884d8" label="test" />
          </BarChart>
        </div>
          // <img
          //   src={Plot3}
          //   className="pb6 "
          //   alt="logo"
          //   height="450px"
          //   width="450px"
          // />
      );
    } else if (svgType === "liver") {
      console.log("liver has been identified");
      return (
        <div>
          <BarChart layout="vertical"  width={this.state.chartWidth} height={this.state.chartHeight} data={this.state.liver_data}>
            <XAxis  type="number"/>
            <YAxis dataKey="name" type="category" width={this.state.yWidth} tick={this.state.whiteFill} />
            <Tooltip />
            <Bar type="monotone" dataKey="A" barSize={30} fill="#8884d8"/>
            <Bar type="monotone" dataKey="B" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="C" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="D" barSize={30} fill="#8884d8" label="test" />
          </BarChart>
        </div>
          // <img
          //   src={Plot4}
          //   className="pb6 "
          //   alt="logo"
          //   height="450px"
          //   width="650px"
          // />
      );
    // } else if (svgType === "heart") {
    //   console.log("heart has been identified");
    //   return (
    //       <img
    //         src={Plot5}
    //         className="pb6 "
    //         alt="logo"
    //         height="450px"
    //         width="650px"
    //       />
    //   );
    } else if (svgType === "breasts") {
      console.log("breast has been identified");
      return (
        <div>
          <BarChart layout="vertical"  width={this.state.chartWidth} height={this.state.chartHeight} data={this.state.breast_data} onClick={() => window.location.assign("http://localhost:3000/browse/breast")}>
            <XAxis  type="number"/>
            <YAxis dataKey="name" type="category" width={this.state.yWidth} tick={this.state.whiteFill} />
            <Tooltip />
            <Bar type="monotone" dataKey="A" barSize={30} fill="#8884d8"/>
            <Bar type="monotone" dataKey="B" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="C" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="D" barSize={30} fill="#8884d8" label="test" />
          </BarChart>
        </div>
          // <img
          //   src={L1Chart}
          //   className="pb6 "
          //   alt="logo"
          //   height="650px"
          //   width="715px"
          //   onClick={() => window.location.assign("http://localhost:3000/browse/breast")}
          // />
      );

    } else if (svgType === "uterus") {
      console.log("uterus has been identified");
      return (
        <div>
          <BarChart layout="vertical"  width={this.state.chartWidth} height={this.state.chartHeight} data={this.state.uterus_data}>
            <XAxis  type="number"/>
            <YAxis dataKey="name" type="category" width={this.state.yWidth} tick={this.state.whiteFill} />
            <Tooltip />
            <Bar type="monotone" dataKey="A" barSize={30} fill="#8884d8"/>
            <Bar type="monotone" dataKey="B" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="C" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="D" barSize={30} fill="#8884d8" label="test" />
          </BarChart>
        </div>
          // <img
          //   src={Plot6}
          //   className="pb6 "
          //   alt="logo"
          //   height="450px"
          //   width="650px"
          // />
      );
    } else if (svgType !== "heart") {
      // console.log("breast has been identified");
      return (
        <div>
          <BarChart layout="vertical"  width={this.state.chartWidth} height={this.state.chartHeight} data={this.state.heart_data} onClick={() => window.location.assign("http://localhost:3000/browse")}>
            <XAxis  type="number"/>
            <YAxis dataKey="name" type="category" width={this.state.yWidth} tick={this.state.whiteFill} />
            <Tooltip />
            <Bar type="monotone" dataKey="A" barSize={30} fill="#8884d8" />
            <Bar type="monotone" dataKey="B" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="C" barSize={30} fill="#8884d8" label="test" />
            <Bar type="monotone" dataKey="D" barSize={30} fill="#8884d8" label="test" />
          </BarChart>
        </div>
      );
    }
  };

  // graphChange = () => {
  //   var data2 = [
  //     {name: "Brain", A:100},
  //     {name: "Lung", A:200},
  //     {name: "Liver", A:50},
  //     {name: "Pancreas", A:880},
  //     {name: "Intestine", A:236},
  //     {name: "Testes", A:464},
  //     {name: "Heart", A:880},
  //     {name: "Breasts", A:533},
  //     {name: "Kidney", A:464},
  //     {name: "Uterus", A:263}
  //   ]
  // }

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

// const data2 = [
//   {name: "Brain", A:100,B:200,C:300,D:400},
//   {name: "Lung", A:200,B:200,C:300,D:400},
//   {name: "Liver", A:50,B:800,C:300,D:400},
//   {name: "Pancreas", A:880,B:599,C:345,D:755},
//   {name: "Intestine", A:236,B:734,C:356,D:844},
//   {name: "Testes", A:464,B:733,C:345,D:263},
//   {name: "Heart", A:880,B:263,C:664,D:573},
//   {name: "Breasts", A:533,B:599,C:125,D:755},
//   {name: "Kidney", A:464,B:664,C:345,D:464},
//   {name: "Uterus", A:263,B:564,C:623,D:664}
// ];

// const data2 = [
//   {name: "Brain", A:100},
//   {name: "Lung", A:200},
//   {name: "Liver", A:50},
//   {name: "Pancreas", A:880},
//   {name: "Intestine", A:236},
//   {name: "Testes", A:464},
//   {name: "Heart", A:880},
//   {name: "Breasts", A:533},
//   {name: "Kidney", A:464},
//   {name: "Uterus", A:263}
// ];
//
//
// const data3 = [
//   {name: "Brain", A:200},
//   {name: "Lung", A:120},
//   {name: "Liver", A:80},
//   {name: "Pancreas", A:600},
//   {name: "Intestine", A:36},
//   {name: "Testes", A:200},
//   {name: "Heart", A:500},
//   {name: "Breasts", A:588},
//   {name: "Kidney", A:400},
//   {name: "Uterus", A:600}
// ]
//
//
// const data4 = [
//   {name: "Brain", A:280},
//   {name: "Lung", A:170},
//   {name: "Liver", A:280},
//   {name: "Pancreas", A:400},
//   {name: "Intestine", A:354},
//   {name: "Testes", A:564},
//   {name: "Heart", A:721},
//   {name: "Breasts", A:128},
//   {name: "Kidney", A:387},
//   {name: "Uterus", A:654}
// ]
//
// const data11 = [
//   {name: "test1",A:100},
// {name: "test2",B:200},
// {name: "test3",C:50},
// {name: "test4",D:880}
// ];

// const Xlabel=[{Test1:1,Test2:1,Test3:1,Test4:1}]



    return (
      <div>
      <input type="checkbox" checked={ this.state.checked } onChange={this.handleChange}/>
        <label style={{border:"2px" , borderStyle: "none none solid none" , borderColor:"#ffffff"}}><b>Enable to Browse by clicking tissue</b></label>
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
{/* style={{background:"#d8ecff",Color:"white"} */}
          <div className="inline-img" >{this.detectSvg(this.state.svgType)}

            {/* <LineChart className="background-body" width={400} height={400} data={data2} margin={{ top: 5, right: 20, bottom: 50, left: 0 }}>
              <Line type="monotone" dataKey="A" stroke="#8884d8" />
              <Line type="monotone" dataKey="B" stroke="#8884d8" />
              <CartesianGrid stroke="#fff" strokeDasharray="5 5"/>
              <XAxis stroke="#fff" dataKey="name" />
              <YAxis stroke="#fff"/>
              <Tooltip />
            </LineChart> */}

            {/* <BarChart layout="vertical"  width={600} height={600} data={data2}>
              <XAxis  type="number"/>
              <YAxis dataKey="name" type="category"/>
              <Tooltip />
              <Bar type="monotone" dataKey="A" barSize={30} fill="#8884d8"/>
              <Bar type="monotone" dataKey="B" barSize={30} fill="#8884d8" label="test" />
              <Bar type="monotone" dataKey="C" barSize={30} fill="#8884d8" label="test" />
              <Bar type="monotone" dataKey="D" barSize={30} fill="#8884d8" label="test" />
            </BarChart> */}
          </div>
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
