import React, { Component } from "react";
import JSONPretty from "react-json-pretty";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Loader from 'react-loader';
import Switch from 'react-toggle-switch';
import Popup from "reactjs-popup";
import "react-toggle-switch/dist/css/switch.min.css";
// ../../../node_modules/

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      loaded: true,
      error_msg: false,
      copied: false,
      data2: String,
      records: "This state has not been set",
      url_id: "NULL",
      data_text: "Data for ",
      colour_dark: false,
      background_colour:"#edf1f4",
      data_background_colour:"#dddddd",
      text_colour:"#000000",
      text_colour_err: "#af0603",
      button_msg: "Darkify",
      switched: true
    };
    // This binding is necessary to make `this` work in the callback
    this.returntext = this.returntext.bind(this);
    this.button_click = this.button_click.bind(this);
    this.changeColour =  this.changeColour.bind(this);
  }
  componentDidMount = () => {
    this.setState({ isLoading: false });
  };

  //Sets the title bar upon loading of the page
  componentWillMount = () => {
    document.title = "RTPEA - API";
  };

  //Sets the title bar after leaving the page
  componentWillUnmount = () => {
    document.title = "RTPEA";
  };

  // retrieves the url_id from the state component and returns the new url
  searchURL = () => {
    let { url_id } = this.state;
    // let url = "http://localhost:3001/api/" + url_id;
    let url = this.props.urlSource+"/api/" + url_id;
    // let url = "http://rtpea.com/api/" + url_id;
    return url;
  };

  //Upon this function call, SearchUrl function is also called
  // the returning url is then converted to JSON
  // and the property of the data is analysed
  // If it contains a status code, the data is saved to the state data2
  // otherwise the first array of the object is saved to state data2

  button_click = () => {
    this.setState({ loaded: false });
    fetch(this.searchURL())
      .then(response => response.json())
      .then(data => {
        if (data.hasOwnProperty("Status")) {
          console.log(data);
          this.setState({ data2: data });
          this.setState({ loaded: true });
          this.setState({ error_msg: true });
        } else {
          console.log(data[0]);
          this.setState({ data2: data[0] });
          this.setState({ loaded: true });
          this.setState({ error_msg: false });
        }
      });
  };

  // This function allows the user to save the data as a file.
  saveAs = (
    content,
    filename = this.state.url_id + ".json",
    type = "application/json"
  ) => {
    let blob = new Blob([content], { type });
    let uri = URL.createObjectURL(blob);

    let link = document.createElement("a");
    if (typeof link.download === "string") {
      document.body.appendChild(link);
      link.download = filename;
      link.href = uri;
      link.click();
      document.body.removeChild(link);
    } else {
      window.location.replace(uri);
    }
  };

  changeColour = (checked) =>{
        // this.setState({colour_dark: !this.state.color_black})
        this.setState(prevState => {
        return {
          switched: !prevState.switched
        };
        });
        if (this.state.data_background_colour === "#dddddd"){
          this.setState({background_colour: "#4f5256"})
          this.setState({data_background_colour: "#25282d"})
          this.setState({text_colour: "#ffffff"})
          this.setState({text_colour_err: "#ef0b07"})
          this.setState({button_msg: "Brighten"})
        } else if (this.state.data_background_colour !== "#dddddd"){
          this.setState({background_colour: "#edf1f4"})
          this.setState({data_background_colour: "#dddddd"})
          this.setState({text_colour: "#000000"})
          this.setState({text_colour_err: "#af0603"})
          this.setState({button_msg: "Darkify"})

        }
    };

  // useless code
  returntext = () => {
    console.log("Example State has now been set via this button");
    if (this.state.records === "Example State has now been set") {
      this.setState({ records: "Example State has been reverted" });
    } else {
      this.setState({ records: "Example State has now been set" });
    }
  };



  render() {

    var options = {
    lines: 16,
    length: 50,
    width: 15,
    radius: 50,
    scale: 1.00,
    corners: 1,
    color: '#1f3647',
    opacity: 0.3,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 50,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: true,
    hwaccel: false,
    position: 'absolute'
  };

    return (
      <div className="ma4 mt0 background-body4-noalign container col-md-9" style={{backgroundColor: this.state.background_colour}}>
        {/* {this.state.isLoading ? console.log("yes") : console.log("no")}
        {this.state.isLoading} */}

        <div className="container alert alert-info alert-dismissible">
          <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
          <b>For programmatic Access go to: <a href="https://api.rtpea.com/api">https://api.rtpea.com/api</a></b>
        </div>

        

        {/* Searchbox which converts the text to uppercase and calls the button_click
           function upon enter button being pressed or button being clicked */}
        <input
          placeholder="PXDXXXXXX..."
          onChange={e => this.setState({ url_id: e.target.value.toUpperCase() })}
          onKeyPress={event => {if (event.key === "Enter") {
              this.button_click();
            }
          }}/>


          &nbsp;
        <button className="btn btn-outline-primary" onClick={this.button_click}>Search Database</button>

        {/* <span className="glyphicon glyphicon-search">test</span> */}

        <br />
        <br />

         {/* <button type="button" className="btn btn-outline-primary" onClick={() => this.changeColour()}>{this.state.button_msg}</button>
         <br/> */}


         <Switch onClick={this.changeColour} on={this.state.switched} className='switch-colour'/>


        <div className="background-body4" style={{backgroundColor: this.state.data_background_colour}}>


          {/* <Popup trigger={<button className="btn btn-outline-primary"> Information! </button>} modal>
            {close => (
              <div className="">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="header"> Programmatic Access</div>
                <div className="content">
                  For programmatic Access go to: <a href="https://api.rtpea.com/api">https://api.rtpea.com/api</a>

                  <br />

                  <div className="header"></div>
                </div>
              </div>
            )}
          </Popup> */}
          <div className="background-body4-nojson" style={{color: this.state.text_colour}}>
            Data for: {this.state.url_id}
          </div>

          {/* Copies the displayed data (data in the state component) to the users clipboard */}
          <CopyToClipboard
            text={JSON.stringify(this.state.data2, null, 2)}
            onCopy={() => this.setState({ copied: true })}>
            <button className="btn btn-outline-info">Copy Data</button>
          </CopyToClipboard>
          &nbsp;
          {/* If the data has been copied, then text tells the user the result */}
          {this.state.copied ? (
            <span style={{ color: "red" }}>Copied.</span>
          ) : null}

          {/* On click, saveAs function is called which lets users
            download the data */}
          <button className="btn btn-outline-info"
            onClick={e =>
              this.saveAs(JSON.stringify(this.state.data2, null, 2))
            }
          >
            Download
          </button>

          {/* If error_msg is true, then the colour is changed to red and the
            data is displayed
            otherwise the data is displayed in black */}
          <Loader loaded={this.state.loaded} options={options} className="spinner">

            {/* <div className="progress">
             <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
             aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
               100%
             </div>
            </div> */}








          {this.state.error_msg ? (
            <JSONPretty
              style={{ fontSize: "1.6em", color: this.state.text_colour_err }}
              id="json-pretty"
              json={JSON.stringify(this.state.data2)}
            />
          ) : (
            <JSONPretty
              style={{ fontSize: "1.2em", color: this.state.text_colour }}
              id="json-pretty"
              json={JSON.stringify(this.state.data2)}
            />
          )}
          </Loader>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default Api;
