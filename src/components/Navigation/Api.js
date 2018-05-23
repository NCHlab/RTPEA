import React, { Component } from "react";
import JSONPretty from "react-json-pretty";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Loader from 'react-loader';

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
      color_black: true
    };
    // This binding is necessary to make `this` work in the callback
    this.returntext = this.returntext.bind(this);
    this.button_click = this.button_click.bind(this);
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
    let url = "http://localhost:3001/api/" + url_id;
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
      // "http://localhost:3001/api/PXD002233"
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

  changeColor = () =>{
        this.setState({color_black: !this.state.color_black})
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
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: true,
    hwaccel: false,
    position: 'absolute'
  };

    return (
      <div className="ma4 mt0 background-body4-noalign container">
        {this.state.isLoading ? console.log("yes") : console.log("no")}
        {this.state.isLoading}

        <br />

        {/* Searchbox which converts the text to uppercase and calls the button_click
           function upon enter button being pressed or button being clicked */}
        <input
          placeholder="Search for PXDXXXX"
          onChange={e => this.setState({ url_id: e.target.value.toUpperCase() })}
          onKeyPress={event => {if (event.key === "Enter") {
              this.button_click();
            }
          }}/>

        <button onClick={this.button_click}>Search Database</button>

        <br />
        <br />
        <br />

        <button onClick={this.returntext}>returntext</button>
        {this.state.records}

        <br />
        <input type="button" onClick={document.bgColor="red"} value="red"/>
         <button style={{backgroundColor: document.bgColor}} onClick={this.changeColor.bind(this)}>Button</button>

        <div className="background-body4">
          <div className="background-body4-nojson">
            Data for: {this.state.url_id}
          </div>

          {/* Copies the displayed data (data in the state component) to the users clipboard */}
          <CopyToClipboard
            text={JSON.stringify(this.state.data2, null, 2)}
            onCopy={() => this.setState({ copied: true })}>
            <button>Copy Data</button>
          </CopyToClipboard>

          {/* If the data has been copied, then text tells the user the result */}
          {this.state.copied ? (
            <span style={{ color: "red" }}>Copied.</span>
          ) : null}

          {/* On click, saveAs function is called which lets users
            download the data */}
          <button
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

          {this.state.error_msg ? (
            <JSONPretty
              style={{ fontSize: "1.6em", color: "#af0603" }}
              id="json-pretty"
              json={JSON.stringify(this.state.data2)}
            />
          ) : (
            <JSONPretty
              style={{ fontSize: "1.2em", color: "#000000" }}
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
