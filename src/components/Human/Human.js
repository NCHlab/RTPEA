import React, { Component } from "react";
import Svg3 from "./human_colourised_lung_grouped.svg";


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
import SVG from "react-inlinesvg";

import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  Cell
} from "recharts";


class Human extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "false",
      highlight: false,
      checked: false,
      index: "",
      svgType: undefined,
      x: 0,
      y: 0,
      chartWidth: 800,
      chartHeight: 600,
      yWidth: 120,
      whiteFill: { fill: "white", fontSize: 14 },
      current_active_tissue: "",
      brain_data: brain_data,
      lung_data: lung_data,
      liver_data: liver_data,
      uterus_data: uterus_data,
      breast_data: breast_data,
      heart_data: heart_data,
      intestine_data: intestine_data,
      kidney_data: kidney_data,
      pancreas_data: pancreas_data,
      testes_data: testes_data,
      all_other_tissue_data: all_other_tissue_data,
      all_data: all_data,
      clicktochange: "Hover over tissue to display graph",
      hovertochange: "Click on tissue to display graph"
    };

    this.detectSvg = this.detectSvg.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.makeActive = this.makeActive.bind(this)
  }

  componentDidMount = () => {};

  detectSvg = svgType => {
    var data_type = [];
    var urlstate = "";
    if (svgType === "liver") {
      data_type = this.state.liver_data;
      urlstate = "liver";
    } else if (svgType === "lung") {
      data_type = this.state.lung_data;
      urlstate = "lung";
    } else if (svgType === "uterus") {
      data_type = this.state.uterus_data;
      urlstate = "uterus";
    } else if (svgType === "testes") {
      data_type = this.state.testes_data;
      urlstate = "testes";
    } else if (svgType === "pancreas") {
      data_type = this.state.pancreas_data;
      urlstate = "pancreas";
    } else if (svgType === "kidney") {
      data_type = this.state.kidney_data;
      urlstate = "kidney";
    } else if (svgType === "intestine") {
      data_type = this.state.intestine_data;
      urlstate = "intestine";
    } else if (svgType === "heart") {
      data_type = this.state.heart_data;
      urlstate = "heart";
    } else if (svgType === "breasts") {
      data_type = this.state.breast_data;
      urlstate = "breast";
    } else if (svgType === "brain") {
      data_type = this.state.brain_data;
      urlstate = "brain";
    } else if (svgType === undefined) {
      data_type = this.state.all_data;
    } else {
      data_type = this.state.all_other_tissue_data;
    }
    var data_color = [
      "#53b4d8",
      "#c60000",
      "#c60000",
      "#3ec629",
      "#3ec629",
      "#185bce",
      "#185bce",
      "#185bce",
      "#cc7f28"
    ];

    return (

      <div>
        <div style={{ textAlign: "center" }}>
          <h3>
            Summary Metric:{" "}
            {this.state.svgType === "whole_human_img" ? "Other Tissues" : this.state.svgType === undefined
              ? "All Tissues" : this.state.svgType.slice(0, 1).toUpperCase() + this.state.svgType.slice(1)}
          </h3>
        </div>
        <BarChart
          layout="vertical"
          width={this.state.chartWidth}
          height={this.state.chartHeight}
          data={data_type}
          onClick={() => window.location.assign(this.props.urlSource2 + "/browse/" + urlstate)}>
          <XAxis type="number" tick={this.state.whiteFill}/>
          <YAxis dataKey="name" type="category" width={this.state.yWidth} tick={this.state.whiteFill}/>
          <Tooltip cursor={{ cursor: "pointer" }} wrapperStyle={{ color: "black" }} itemStyle={{ color: "#001fbf" }}/>
          <Bar dataKey="Number" type="monotone" barSize={25}> {/*onMouseOver={{ cursor: "pointer" }}*/}
            {data_color.map((entry, index) => (<Cell key={`cell-${index}`} fill={data_color[index]} />))}</Bar>
        </BarChart>
      </div>
    );
  };


  makeActive = e =>  {
    if (this.state.current_active_tissue !== ""){
    // Removing active colour for the current active tissue
      var ClassNameChange = document.getElementsByClassName(this.state.current_active_tissue)[0]
      if (ClassNameChange !== undefined && ClassNameChange !== 'whole_human_img'){
        ClassNameChange.attributes.class.value = ClassNameChange.attributes.class.value.replace(/organ-svg-clicked\b/g, "")
        }
    }

    var target_tissue = e.target.classList[1]
    this.setState({current_active_tissue:target_tissue})
    if (target_tissue !== undefined && target_tissue !== 'whole_human_img'){
    document.getElementsByClassName(target_tissue)[0].classList += ' organ-svg-clicked'
  }

}

  onClickHandler = e => {
    this.setState({ svgType: e.target.classList[1] });
    if (this.state.checked !== true) {
      this.setState({ checked: true });
    }
    this.makeActive(e)
  };

  onMouseOverHandler = e => {
    this.setState({ svgType: e.target.classList[1] });
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
        onMouseOver={e => this.onMouseOverHandler(e)}
        onClick={e => this.onClickHandler(e)}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        className={className}
      />
    );
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="ma4 mt0">
          <div className="container c1">
            <div className="human-img">
              <div className="go-left">
                <div id="human-svg-1">
                  <SVG
                    src={Svg3}
                    uniquifyIDs={false}
                    wrapper={
                      this.state.checked
                        ? this.svgWrapper_onClick
                        : this.svgWrapper_mouseOver}/>
                </div>
              </div>
            </div>


            <div className="inline-img">
              <br />
              <br />
              {this.detectSvg(this.state.svgType)}
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Human;
