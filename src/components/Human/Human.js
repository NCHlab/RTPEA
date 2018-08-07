import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Humanimg from "./Human1.png";
// import Svg1 from "./human_non_colourised.svg";
// import Svg2 from "./human_colourised.svg";
import Svg3 from "./human_colourised_lung_grouped.svg";
// import Humanimg2 from "./Human_W.png";
// import Human_lung from "./Human_lung.png";
import L1Chart from "../Images/L1-Identifications.png";
// import Brain from "./Brain.png";
// import Plot1 from "./plot1.png";
// import Plot3 from "./plot3.png";
// import Plot4 from "./plot4.png";
// import Plot5 from "./plot5.png";
// import Plot6 from "./plot6.png";
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
import all_other_tissue_data from "../Files/all_other_tissue.json";
import all_data from "../Files/all_data.json";

import "./Human.css";
import $ from "jquery";
import SVG from "react-inlinesvg";
import Loader from "react-loader";
import { LineChart, Line, BarChart, Bar, YAxis, XAxis,CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import Browse from '../Navigation/Browse';




class Human extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "false",
      highlight: false,
      checked: false,
      index: "",
      svgType: "Other Tissues",
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
      all_other_tissue_data: all_other_tissue_data,
      all_data: all_data,
      testes_data: testes_data,
      clicktochange:"Hover over tissue to display graph",
      hovertochange:"Click on tissue to display graph",



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
    var data_type = []
    var urlstate = ""
    if (svgType === "liver") {
      data_type = this.state.liver_data
    } else if (svgType === "lung"){
      data_type = this.state.lung_data
    }else if (svgType === "uterus"){
      data_type = this.state.uterus_data
    }else if (svgType === "testes"){
      data_type = this.state.testes_data
    }else if (svgType === "pancreas"){
      data_type = this.state.pancreas_data
    }else if (svgType === "kidney"){
      data_type = this.state.kidney_data
    }else if (svgType === "intestine"){
      data_type = this.state.intestine_data
    }else if (svgType === "heart"){
      data_type = this.state.heart_data
    }else if (svgType === "breasts"){
      data_type = this.state.breast_data
      urlstate = "breast"
    }else if (svgType === "brain"){
      data_type = this.state.brain_data
    }else if (svgType === undefined){
      data_type = this.state.all_data
    } else {
        data_type= this.state.all_other_tissue_data
      }
    var data_color=["#53b4d8","#c60000","#c60000","#3ec629","#3ec629","#185bce","#185bce","#185bce","#cc7f28"]
    // <Bar type="monotone" dataKey="Number" barSize={25} fill={["#53b4d8"]} onMouseOver={{cursor:'pointer'}}/>
    return (
    // style={{borderLeft:"2px solid #ccc",borderRight:"2px solid #ccc",borderBottom:"2px solid #ccc",borderColor:"#bababa"}}>
      <div>
        {/* <div className="text-justify" align="center" width="44%"> Now Viewing: {this.state.svgType}</div> */}
        {/* <div style={{textAlign:"center",backgroundColor:"#a3d7ff",color:"#000000",borderLeft:"10px solid #ccc",borderColor:"#2196F3"}}><h3>Viewing: {this.state.svgType == "whole_human_img"  || this.state.svgType == undefined ? "Other Tissues" : this.state.svgType.slice(0,1).toUpperCase()+this.state.svgType.slice(1)}</h3></div> */}
        {/* <div style={{textAlign:"center",borderLeft:"10px solid #ccc",borderTop:"2px solid #ccc",borderRight:"10px solid #ccc",borderBottom:"2px solid #ccc",borderColor:"#bababa"}}><h3>Summary Metric: {this.state.svgType == "whole_human_img"  || this.state.svgType == undefined ? "Other Tissues" : this.state.svgType.slice(0,1).toUpperCase()+this.state.svgType.slice(1)}</h3></div> */}

        {/* <XAxis type="number" tick={this.state.whiteFill} domain={[dataMin => (0), dataMax => {
          if (dataMax <=200){
            return (dataMax = 200)
          } else if (dataMax > 200 && dataMax <= 300){
            return (dataMax = 300)
          } else if (dataMax > 300 && dataMax <= 400){
            return (dataMax = 400)

          } else if (dataMax > 400 && dataMax <= 500){
            return (dataMax = 400)
          } else if (dataMax > 500 && dataMax <= 700){
            return (dataMax = 400)
          } else if (dataMax > 700 && dataMax <= 1000){
            return (dataMax = 400)
          } else {
            return (dataMax = 400)
          }
        }
        ]}/> */}
        {/* <div style={{textAlign:"center"}}><h3>Summary Metric: {this.state.svgType == "whole_human_img"  || this.state.svgType == undefined ? "Other Tissues" : this.state.svgType.slice(0,1).toUpperCase()+this.state.svgType.slice(1)}</h3></div> */}

        <div style={{textAlign:"center"}}><h3>Summary Metric: {this.state.svgType == "whole_human_img" ? "Other Tissues" : this.state.svgType == undefined ? "All Tissues" : this.state.svgType.slice(0,1).toUpperCase()+this.state.svgType.slice(1)}</h3></div>
        <BarChart  layout="vertical"  width={this.state.chartWidth} height={this.state.chartHeight} data={data_type} onClick={() => window.location.assign(this.props.urlSource2+"/browse/"+urlstate)}>
          <XAxis type="number" tick={this.state.whiteFill} />




          <YAxis dataKey="name" type="category" width={this.state.yWidth} tick={this.state.whiteFill} />
          <Tooltip cursor={{cursor:'pointer'}} wrapperStyle={{color:"black"}} itemStyle={{color:"#001fbf"}}/>
          <Bar dataKey="Number" type="monotone" barSize={25} onMouseOver={{cursor:'pointer'}}>
           {
             data_color.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={data_color[index]} />
             ))
           }
         </Bar>
        </BarChart>
      </div>
    )
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
        {/* {console.log(this.props)} */}
        {/* style={{cursor:'pointer'}} */}
        {/* <input checked data-toggle="toggle" type="checkbox"/> */}
      <sup>Currently On:</sup> &emsp;

      <button style={{float:"", display: "inline"}} className="btn btn-outline-warning" onClick={() => {this.handleChange()}}> {this.state.checked ? "Click Mode" : "Hover Mode"} </button>

      {/* <input   type="button" data-on="Enabled" data-off="Disabled" checked={ this.state.checked } onClick={() => {this.handleChange()
      console.log(this.state.checked)}}/> */}
      <br/>
      <br/>

      <label style={{border:"2px" , borderStyle: "none none solid none" , borderColor:"#ffffff"}}><b>{this.state.checked ? this.state.hovertochange : this.state.clicktochange}</b></label>
        {/* <label style={{border:"2px" , borderStyle: "none none solid none" , borderColor:"#ffffff"}}><b>Enable to Browse by clicking tissue</b></label> */}

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


          <div className="inline-img"  >
            <br/>
            <br/>
            {this.detectSvg(this.state.svgType)}
            {/* {console.log(this.state.svgType)} */}
          </div>
        </div>
        <br />
        <br />
      </div>
      {/* <BarChart /> */}

    </div>
    );
  }
}

export default Human;
