import React, { Component } from "react";
import Flowchart from "../Info/FlowChart_Msc.png";
import ImageMapper from "react-image-mapper";

let Soft_map = {
  name: "software architecture map",
  areas: [
    { shape: "rect", coords: [1, 0, 749, 20] /* Architecture */ },
    { shape: "rect", coords: [1, 21, 299, 600] /* View */ },
    { shape: "rect", coords: [300, 21, 449, 600] /* Controller */ },
    { shape: "rect", coords: [450, 21, 749, 600] /* Model */ }
  ]
};

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
  };

  MouseLeave = () => {
    this.setState({ loading: "false" });
  };

  ImageArray = index => {
    if (index === 0) {
      return (
        <div>
          Websites are typically created with a MVC (Model, View, Controller) in
          mind.
          <br />
          <br />
          It is a software architectural design pattern which essentially
          seperates application functionality into different sections.
          <br />
          <br />
          It also seperates the logic and the interface in an application. This
          promotes organized programming and allows multiple developers to work
          on projects without issues of overlapping. As a group of devs can work
          on the model, how it is structured, the data format etc, while people
          working on the controller work on the logic of how to communicate to
          the database.
        </div>
      );
    } else if (index === 1) {
      return <div>
                This consists of the View made by using ReactJs.
                <br/>
                <br/>
                Essentially it is what the user sees (user interface) and interacts with. It is made up of HTML and CSS.
                The type of templating engine used to render information is essential in providing dynamic data.
                <br/>
                <br/>
                HTML does not come with any logic built in as such it is not possible to conduct If statements and for loops without the use of a templating engine.
                <br/>
                <br/>
                ReactJs allows for data to be parsed and displayed dynamically using javascript inside of the HTML document.
                <br/>
                <br/>
                A user is able to interact with the website, depending on the actions the view is able to display what the user wants
                otherwise the API server is contacted in order for requested data to be handled.


            </div>;
    } else if (index === 2) {
      return (
        <div className="">
          This consists of the Controller which is where the API server is
          located.
          <br/>
          All data is processed through the controller.
          <br/>
          <br/>
          The controller recieves input from the view and processes the requests that can involve GET, POST, PUT, DELETE requests.
          <br/>
          <br/>
          The controller communicates with the model to grab data and then is able to pass the data to the view.
          It essentially acts the the brains connecting the two sides (view and model) together.

        </div>
      );
    } else if (index === 3) {
      return (
        <div>
          This consists of the Model where the data is handled and stored.
          It is the brain of the application, and consists of data related logic.
          <br/>
          <br/>
          Interactions with the database include, SELECT, ISNERT, UPDATE and DELETE functions.
          It usually communicates with only the controller and in a well defined MVC application, it will not update the view. as that is the controllers job to do.

          MongoDB is our database of choice allowing us to display
          results to this web portal. It utilises the noSQL architecture
          reducing the complexity of dealing with SQL based servers.
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

        <div className="line-seperator" />
        <div className="background-body2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ImageMapper
                  src={Flowchart}
                  map={Soft_map}
                  fillColor="rgba(0, 0, 0, 0.1)"
                  className="pb6"
                  alt=""
                  height={"413"}
                  width={"750"}
                  onMouseEnter={this.MouseEnter}
                />
              </div>
              <div className="col-md-4 text-left">
                {this.ImageArray(this.state.index)}
              </div>
            </div>
          </div>
        </div>
        <div className="line-seperator" />
        <div className="background-body">
          <p>
          <h1> Demo Video </h1>
        </p>

          <iframe title="RTPEA Tutorial" width="1280" height="720"
            src="https://www.youtube.com/embed/5FkMAEBXEfE">
          </iframe>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="line-seperator" />
        <div className="background-body2">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="line-seperator" />

      </div>
    );
  }
}

export default Info;
