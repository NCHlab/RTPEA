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
    let url = this.props.urlSource + "/api/" + url_id;
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

  download_protvista = () => {
    this.setState({ name_of_file: "ProtVista" });
    fetch(this.props.urlSource + "/visualise_all")
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
            className="background-body4-download"
            style={{ backgroundColor: this.state.data_background_colour }}
          >
            <div className="container">
              <div style={{textAlign:"center"}}><h3><u>Download from Database</u></h3> </div>
              <table id="download_table" className="table-border">
                <tbody>
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
                  <td>Download all available Line-1 element data in <b><a href="../sequence">Sequence page</a></b> from database </td>
                </tr>

                <tr>
                  <td>
                    <button className="btn btn-info"
                      onClick={e => this.download_protvista()}
                    >
                      Download ProtVista Data
                    </button>
                  </td>
                  <td>Download all variant data held for ProtVista</td>
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
                        window.location = "https://api.rtpea.com/api";
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
              </tbody>
              </table>
            <br/>
              <Tabs>
                <TabList>
                  <Tab>Simple API Call</Tab>
                  <Tab>API multiple</Tab>
                  <Tab>Python</Tab>
                  <Tab>JavaScript</Tab>
                  <Tab>R</Tab>
                </TabList>


                <TabPanel>
                  <Highlight language="bash">
                  {`
wget "https://api.rtpea.com/api/PXD002211"

or

curl "https://api.rtpea.com/api/PXD002211"
                  `}
                </Highlight>
                </TabPanel>
                <TabPanel>
                  <Highlight language="bash">
                  {`
## declare an array variable
declare -a arr=("PXD002211","PXD002212","PXD004682","PXD003407","PXD003409","PXD003552","PXD005733","PXD004818")

## now loop through the above array
for i in "$\{arr[@]}"
do
    wget "https://api.rtpea.com/api/"$i
done

                  `}
                </Highlight>
                </TabPanel>
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


              <div style={{textAlign:"center"}}><h3><u>Proteomic Parameters</u></h3> </div>
            <table id="download_table" className="table-border">
              <tbody>
              <tr>
                <th>Download</th>
                <th>Info</th>
              </tr>
              <tr>
                <td>
                <button className="btn btn-outline-danger" disabled>
                  Download Experimental Parameters
                </button>
              </td>
              <td>Protein Experimental Parameters - Under Construction</td>
            </tr>
            <tr>
              <td>
              <button className="btn btn-outline-danger" disabled>
                Download Mass Spec Parameters
              </button>
            </td>
            <td>Mass spectrometry parameters - Under Construction</td>
          </tr>
        </tbody>
          </table>
          </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default Download;
