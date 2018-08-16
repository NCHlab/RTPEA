import React, { Component } from "react";
import JSONPretty from "react-json-pretty";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Loader from "react-loader";
import Switch from "react-toggle-switch";
import Popup from "reactjs-popup";
import "react-toggle-switch/dist/css/switch.min.css";
import NavDownload from "./NavDownload.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Highlight from "react-highlight";
import "../Highlight/styles/vs2015.css";
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
      switched: true,
      name_of_file: ""
    };
    // This binding is necessary to make `this` work in the callback

    this.button_click = this.button_click.bind(this);
    this.download_table = this.download_table.bind(this);
    this.download_l1seq = this.download_l1seq.bind(this);
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

  download_table = () => {
    this.setState({ name_of_file: "Table" });
    fetch(this.props.urlSource + "/table")
      .then(response => response.json())
      .then(data => {
        this.saveAs(JSON.stringify(data, null, 2));
      });
  };

  download_l1seq = () => {
    this.setState({ name_of_file: "Line-1_Sequences" });
    fetch(this.props.urlSource + "/sequence/all")
      .then(response => response.json())
      .then(data => {
        this.saveAs(JSON.stringify(data, null, 2));
      });
  };

  // This function allows the user to save the data as a file.
  saveAs = (
    content,
    filename = this.state.name_of_file + ".json",
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
              <table id="download_table" className="table-border">
                <tr>
                  <th>Download</th>
                  <th>Info</th>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={e => this.download_table()}
                    >
                      Download Table Data
                    </button>
                  </td>
                  <td>Contains data found in the table </td>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={e => this.download_l1seq()}
                    >
                      Download all L1 Prot Sequences
                    </button>
                  </td>
                  <td>Download all available Line-1 element data from db</td>
                </tr>

                <tr>
                  <td>
                    <button className="btn btn-outline-danger" disabled>
                      Download ProtVista Data
                    </button>
                  </td>
                  <td>Under Construction</td>
                </tr>
                <tr>
                  <td>
                    <button className="btn btn-outline-danger" disabled>
                      Download Parameters
                    </button>
                  </td>
                  <td>Protein Experimental Parameters - Under Construction</td>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={e => {
                        window.location = "../api";
                      }}
                    >
                      Go to API
                    </button>
                  </td>
                  <td>
                    For Manual Access to the Application
                    Programming Interface
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={e => {
                      }}
                    >
                      Programmatic API
                    </button>
                  </td>
                  <td>
                    For Programmatic Access to the Application
                    Programming Interface. API code examples given below.
                  </td>
                </tr>
              </table>
            <br/>
              <Tabs>
                <TabList>
                  <Tab>Python</Tab>
                  <Tab>javaScript</Tab>
                  <Tab>R</Tab>
                </TabList>

                <TabPanel>
                  <Highlight language="python">
                    {`
import json
import urllib2
import json
List_of_PXD = ["PXD002211","PXD002212","PXD004682","PXD003407","PXD003409","PXD003552","PXD005733","PXD004818"]

for i in List_of_PXD:
    url = "https://api.rtpea.com/api/" + i '# open the url and the screen name'
    data = json.load(urllib2.urlopen(url)) '# Python objects dumped into JSON string'

    with open(i+".json", "w") as outfile: '# Saves the file to JSON as PXD.json'
        json.dump(data, outfile)
`}
                  </Highlight>
                </TabPanel>
                <TabPanel>
                  <Highlight language="javascript">
                    {`
var fetchUrl = require("fetch").fetchUrl;
const fs = require("fs"); //file system library

List_of_PXD = ["PXD002211","PXD002212","PXD004682","PXD003407","PXD003409","PXD003552","PXD005733","PXD004818"]

// Fetches data from URL and parses into JSON, before bring turned to string to convert to readable form
for (var i = 0; i < List_of_PXD.length; i++){
  fetchUrl("http://localhost:3001/api/"+List_of_PXD[i],  function(error, meta, body){
      parsed_data = JSON.parse(body)
      json_data = JSON.stringify(parsed_data)
      // Writes to js_json folder with PXD name
      fs.writeFile("./js_json/"+parsed_data[0].PXD+".json", body, (err) => {
          if (err) {
              console.error(err);
              return;
          };
          console.log("File has been created");
      })
      });
}                  `}
                  </Highlight>
                </TabPanel>
                <TabPanel>
                  <Highlight language="R">
                    {`
library(jsonlite)

setwd("D:/UserDirectory/")

write.json <- function(x, file = "", ...) {
  x.json <- toJSON(x, pretty = TRUE, na='string', auto_unbox = TRUE)
  write(x.json, file=file)
}

List_of_PXD = list("PXD002211","PXD002212","PXD004682","PXD003407","PXD003409","PXD003552","PXD005733","PXD004818")


for (i in List_of_PXD){
  '# url that hosts data'
  url <- paste('https://api.rtpea.com/api/',i,sep="")
  '# read url and convert to data.frame'
  document <- fromJSON(txt=url)
  '# Writes to file in folder r_result as PXD.json'
  write.json(document, file = paste("./r_result/", i,".jSON", sep=""))
}
                    `}
                  </Highlight>
                </TabPanel>
              </Tabs>

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
