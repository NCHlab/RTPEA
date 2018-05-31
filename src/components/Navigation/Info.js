import React, { Component } from "react";
import Flowchart from "../Info/FlowChart_Msc.png";
import ImageMapper from "react-image-mapper";

let Soft_map = {
  name: "software architecture map",
  areas: [
    { shape: "rect", coords: [1, 24, 363, 600] /* View */ },
    { shape: "rect", coords: [364, 24, 545, 600] /* Controller */ },
    { shape: "rect", coords: [546, 24, 908, 600] /* Model */ }
  ]
};
//[Left,Top,Right,Bottom]

// { shape: "rect", coords: [1,21,320,440],  /* View */ },
// { shape: "rect", coords: [322,21,480,440],  /* Controller */ },
// { shape: "rect", coords: [481,20,800,440],  /* Model */ },
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "false",
      highlight: false,
      index: ""
    };
  }

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

  ImageArray = index => {
    if (index === 0) {
      return (
        <div>
          This consists of the View made by using ReactJs
          <br />
          -
        </div>
      );
    } else if (index === 1) {
      return (
        <div>
          This consists of the Controller which is where the API server is
          located. All data is processed through the controller.
        </div>
      );
    } else if (index === 2) {
      return (
        <div>
          This consists of the Model where the data is handled and stored.
          <br />
          -
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <br />
        <div className="container col-md-6">
          <h1>RTPEA Flowchart</h1>
        </div>

        {/* <img src={Flowchart} alt="FlowChart" height="600px" width="1090px" /> */}

        <br />
        <br />
        <br />
        <br />

        <div className="line-seperator" />
        <div className="background-body2">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <ImageMapper
                  src={Flowchart}
                  map={Soft_map}
                  fillColor="rgba(0, 0, 0, 0.1)"
                  className="pb6"
                  alt=""
                  height={"450"}
                  width={"817"}
                  onMouseEnter={this.MouseEnter}
                />
              </div>
              <div className="col-md-3">
                {this.ImageArray(this.state.index)}
              </div>
            </div>
          </div>
        </div>
        <div className="line-seperator" />
        <div className="background-body">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="line-seperator" />


        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Info;

{
  /* <div className="container">
	<h2>RTPEA Flowchart</h2>
	<h2>{this.ImageArray(this.state.index)}</h2>
	<ImageMapper src={Flowchart}  map={Soft_map} fillColor="rgba(0, 0, 0, 0.1)" className="pb6" alt="" height={"500"} width={"908"} onMouseEnter={this.MouseEnter} />
	{/* <img src={Flowchart} alt="FlowChart" height="600px" width="1090px" />
</div> */
}
