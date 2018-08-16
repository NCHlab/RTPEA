import React, { Component } from "react";
import JSONPretty from "react-json-pretty";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Loader from "react-loader";
import Switch from "react-toggle-switch";
import Popup from "reactjs-popup";
import "react-toggle-switch/dist/css/switch.min.css";
import NavDownload from "./NavDownload.js";
// ../../../node_modules/

class Download extends Component {
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
      background_colour: "#edf1f4",
      data_background_colour: "#dddddd",
      text_colour: "#000000",
      text_colour_err: "#af0603",
      button_msg: "Darkify",
      switched: true
    };
    // This binding is necessary to make `this` work in the callback

    this.button_click = this.button_click.bind(this);
    this.download_table = this.download_table.bind(this);

  }
  componentDidMount = () => {
    this.setState({ isLoading: false });
  };

  //Sets the title bar upon loading of the page
  componentWillMount = () => {
    document.title = "RTPEA - Download";
  };

  //Sets the title bar after leaving the page
  componentWillUnmount = () => {
    document.title = "RTPEA";
  };

  // retrieves the url_id from the state component and returns the new url
  searchURL = () => {
    let { url_id } = this.state;
    // let url = "http://localhost:3001/api/" + url_id;
    let url = this.props.urlSource + "/api/" + url_id;
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

  download_table = () =>{
    fetch(this.props.urlSource+"/table")
    .then(response => response.json())
    .then(data => {
       this.saveAs(JSON.stringify(data, null, 2))
  })
}

  // This function allows the user to save the data as a file.
  saveAs = (
    content,
    filename = "table" + ".json",
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



  render() {

    return (
      <div>
        <div className="line-seperator" />
        <NavDownload />
        <div className="line-seperator" />

        <div
          className="ma4 mt0 background-body4-noalign container col-md-9"
          style={{ backgroundColor: this.state.background_colour }}
        >

          <div
            className="background-body4"
            style={{ backgroundColor: this.state.data_background_colour }}
          >
            <div class="container">


              <table id="download_table">
                <tr>
                  <th>Download</th>
                  <th>Info</th>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btn btn-outline-info"
                      onClick={e => this.download_table()}
                    >
                      Download Table Data
                    </button>
                  </td>
                  <td>Contains data found in the table </td>
                </tr>
                <tr>
                  <td>
                    <button className="btn btn-outline-info">
                      Download all L1 Prot Sequences
                    </button>
                  </td>
                  <td>Download all available Line-1 element data from db</td>
                </tr>

                <tr>
                  <td>
                    <button className="btn btn-outline-info">
                      Download ProtVista Data
                    </button>
                  </td>
                  <td>Under Construction</td>
                </tr>
              </table>
            </div>
          </div>

          <br />
          <br />
        </div>
        {/* <div class="row">
      <div class="col-md-4">
        <button className="btn btn-outline-info"
          onClick={e =>
            this.saveAs(JSON.stringify(this.state.data2, null, 2))
          }
        >
          Download Table Data
        </button>
      </div>
      <div class="col-md-4">
        <button className="btn btn-outline-info">
          Download all L1 Prot Sequences
        </button>
      </div>
      <div class="col-md-4">
        <button className="btn btn-outline-info">
          Download ProtVista Data
        </button>
      </div>
      <div class="col-md-4">
        Contains data found in the table
      </div>
      <div class="col-md-4">
        download all available Line-1 element data <br/> from db
      </div>
      <div class="col-md-4">
        Under Construction
      </div>
    </div> */}
      </div>
    );
  }
}
export default Download;
