import React, { Component } from "react";
import Human from "../Human/Human";
import CountTo from "react-count-to";
import {
  LineChart,
  Line,
  BarChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import L1HS from "../Images/L1HS_figure.png";
import L1cycle from "../Images/L1-lifecycle.png";
import onlineimg from "../Images/online.png";
import offlineimg from "../Images/offline.png";
import Popup from "reactjs-popup";
import homepage_barchart from "../Files/homepage_barchart.json";
import {isMobile} from 'react-device-detect';
import CounterData from '../Files/CounterData.json'
import Particles from 'react-particles-js';
// import '../../App.css';

// Displays the Home page using JSX
// const  = ({ onShow, onHide }) => {

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mongodb_status: "Offline",
      api_status: "Offline"
    };
  }

  componentDidMount = () => {
    // fetch("http://rtpea.com/dbcheck")
    // fetch("http://localhost:3001/dbcheck")
    fetch(this.props.urlSource+"/dbcheck")
      .then(response => {
        if (response.status === 200){
          this.setState({api_status: "Online"})
        } else {
          this.setState({api_status: "Offline"})
        }
        return response.json()
      })
      .then(data => {
        if (data.Status === "Online"){
          this.setState({mongodb_status: "Online"})
        } else {
          this.setState({mongodb_status: "Offline"})
        }
      })

        // fetch("http://localhost:3001/dbcheck")
        //   .then(response => response.json())
        //   .then(data => {
        //     if (data.Status === "Online"){
        //       this.setState({mongodb_status: "Online"})
        //     } else {
        //       this.setState({mongodb_status: "Offline"})
        //     }
        //   })
        //
        //   fetch("http://localhost:3001/")
        //     .then(response => {
        //       if (response.status === 200){
        //         this.setState({api_status: "Online"})
        //       } else {
        //         this.setState({api_status: "Offline"})
        //       }
        //     })
  };

  renderWebpage = () => {
    if (isMobile) {
        return (
          <div className="container alert alert-warning">
            <strong>Attention!</strong> This Website is <strong>not suitable</strong> for Mobile devices and small Screen Sizes
            <br/>
          </div>
          )
    }
  }

  render() {
    // const data = [
    //   { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    //   { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    //   { name: "Page C", uv: 1000, pv: 9800, amt: 2290 },
    //   { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    //   { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    //   { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    //   { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
    // ];

    return (
      <div>
      <Particles className="particles" params={this.props.particlesOptions} />
      <div className="">
        {this.renderWebpage()}
        {/* {console.log(this.props.urlSource)} */}
        <p className="App-intro">
          <h1 className="container colour-white" style={{textAlign:"center"}}>
            {/* <b><span style={{color:"#639fff"}}>R</span>e<span style={{color:"#639fff"}}>t</span>roelement <span style={{color:"#639fff"}}>P</span>rotein <span style={{color:"#639fff"}}>E</span>xpression <span style={{color:"#639fff"}}>A</span>tlas</b> */}
            <b>Retroelement Protein Expression Atlas</b>
          </h1>
          {/* <hr style={{border:"2px solid rgba(43, 198, 255,1"}}/> */}
          <div className="line-seperator"></div>
        </p>
        {/* <div className="container" style={{color:"black"}}>
          <Popup trigger={<button className="btn btn-outline-primary"> Read Me!</button>} modal closeOnDocumentClick position="right center">
            <div style={{color:"black"}}>Popup content here !! say whatever you need it to say</div>
          </Popup>
        </div> */}

          <div className="container" style={{color:"black"}}>
            <Popup trigger={<button style={{float:"right", display: "inline"}} className="btn btn-outline-warning"> Information! </button>} modal>
              {close => (
                <div className="">
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className="header"> How to use Interactive Human Atlas </div>
                  <div className="content">
                    {/* {" "} */}
                    By Default you can hover over the images to visualise the graph
                    <br />

                    <div className="header"></div>
                    ON HOVER MODE:
                    Hovering over each tissue changes the bar chart. By default, it displays the metrics for the total database
                    <br />
                    ON CLICK MODE:
                    You can select each tissue without the bar charts changing when moved away.
                    <br />
                    You can also <b>click the graph</b> to transfer you to the table to view the datasets for the tissue type selected.
                    <br />

                  </div>
                  {/* <div className="actions">
                    <Popup
                      trigger={<button className="button"> Trigger </button>}
                      position="top center"
                      closeOnDocumentClick
                    >
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
                        nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
                        deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                      </span>
                    </Popup>
                    <button
                      className="button"
                      onClick={() => {
                        console.log('modal closed ')
                        close()
                      }}
                    >
                      close modal
                    </button>
                 </div> */}
                </div>
              )}
            </Popup>
                  </div>




        <body2>
          <div className="container">
            {/* Displays the human image + data retrieved from the human component */}
            {/* {console.log("home")} */}
            {/* {console.log(this.props)} */}
            <Human urlSource2={this.props.urlSource2}/>
          </div>
        </body2>
        <div className="line-seperator" />
        <div className="background-body">
          {/* <button type="button" onClick={onShow}>
          show
        </button> */}
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                Number of PRIDE datasets mined
              </div>
              <div className="col-md-4">
                Number of Samples re-analysed
              </div>
              <div className="col-md-4">
                Total size of spectral files
              </div>
              <div className="col-md-4">
                <h1>
                  <CountTo to={CounterData.prideDatasets} speed={4000} />
                </h1>
              </div>
              <div className="col-md-4">
                <h1>
                  {/* # of Orf2: */}
                  <CountTo to={CounterData.samples} speed={4000} />
                  {/* onComplete={onHide} */}
                </h1>
              </div>
              <div className="col-md-4">
                <h1>
                  <CountTo to={CounterData.specSize} speed={4000} /> GB
                </h1>
              </div>
            </div>
            <br />
          </div>
          <div className="line-seperator" />
          <div className="background-body2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-justify">



              <b>RTPEA</b> is a public database hosting data and results of RetroMiner. There are interactive exploratory components as well as an API to retrieve this data.
              <br/>
              <br/>

              <b>RetroMiner</b> uses unbiased proteomic approaches to reanalyse publicly available PRIDE datasets to detect and identify retroelement proteins.
              <br/>
              This helps build a picture of where RT proteins are being expressed from across various tissues and diseases. The aim of this is to contribute towards the understanding of the biological role of retroelements (<a href="https://sites.google.com/site/brancolaboratory/home"> Brancolab </a>).
              <br/>
              <br/>
              Making these results available via RTPEA allows other researchers to explore the proteomics of RT or branch out to carry out potential further downstream analysis.
              <br/>
              <br/>
              The following tabs are the sections on the top of the page allowing users to navigate through the various components of the website.

                  <br />
                  <br />
                  <br />
                  <hr style={{ borderColor: "#000000" }} />
                  <table>
                    <tr>
                      <th />
                      <th />
                    </tr>
                    <tr>
                      <td>
                        <b>Home:</b>
                      </td>
                      <td>
                        -<i>
                          Explore the human atlas to view the data available

                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Browse:</b>
                      </td>
                      <td>
                        -<i>Search the dataset by id, study, tissue or disease</i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Visualise:</b>
                      </td>
                      <td>
                        -<i>
                          Using Protvista, a viewer for protein sequence features, visualise protein level information
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>API:</b>
                      </td>
                      <td>
                        -<i>
                          Retrieve data programmatically from the database for an ID
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Info:</b>
                      </td>
                      <td>
                        -<i>Further details on the background and technical aspects of RTPEA</i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Contact Us:</b>
                      </td>
                      <td>
                        -<i>Reach out to us for bugs, suggestions, any features you’d like to see or any specific requests you have</i>
                      </td>
                    </tr>
                  </table>
                  <br />
                  <hr style={{ borderColor: "#000000" }} />



                </div>
                <div className="col-md-6">
                  <table className="text-justify" align="center" width="44%" border="4" >
                    <tr>
                      <th> Server </th>
                      <th> Status</th>
                    </tr>
                    <tr>
                      <td>
                        <b>API Server:</b>
                      </td>
                      <td>
                        {this.state.api_status === "Online" ? <img src={onlineimg} alt="Online!" /> : <img src={offlineimg} alt="Online!" />}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>MongoDB Server:</b>
                      </td>
                      <td>
                        {this.state.mongodb_status === "Online" ? <img src={onlineimg} alt="Online!" /> : <img src={offlineimg} alt="Online!" />}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>RetroMiner Server:</b>
                      </td>
                      <td>
                        <img src={onlineimg} alt="Online!" />
                      </td>
                    </tr>
                  </table>
                  <br />
                  <br />
                  <div className="font-italic">
                    {/* onClick={e => this.check_event(e)} */}
                    <LineChart
                      width={600}
                      height={300}
                      data={homepage_barchart}

                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="confidence" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Legend />

                      <Line type="monotone" dataKey="ORF1p" stroke="#1065ed" />
                      <Line type="monotone" dataKey="ORF2p" stroke="#a00000" />
                      <Line type="monotone" dataKey="ORF1p variant" stroke="#0fcbed" />
                      <Line type="monotone" dataKey="ORF2p variant" stroke="#00a03c" />
                    </LineChart>
                    {/* <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    /> */}
                  </div>
                    <br />
                    <div align="left" style={{paddingLeft: "60px"}}>
                    RTPEA is also dedicated to displaying experimental parameters and proteomic metadata for free to use for anyone interested in PRIDE datasets!
                    <br />
                    <br />
                    This website will also host proteomic data (not just RT data) for these datasets thus be accessible to all types of biologists looking at protein identifications of PRIDE and will allow them to download these in the standard mzIdentML format.
                    <br />
                  </div>





                  {/* Server Status:
                  <br />
                  API Server: <img src={onlineimg} alt="Online!" />
                  <br />
                  MongoDB Server: <img src={onlineimg} alt="Offline" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="line-seperator" />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-6 font-italic">
                <img alt="L1HS" src={L1HS} height="300" />
                <br />
                Fig 1 - Proportion of L1-Human-specific elements in the human
                reference genome.
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/20980553">
                  <br />Ewing et al. 2011
                </a>
              </div>

              <div className="col-md-6 text-justify">
                Repetitive DNA accounts for almost half of our genome many of which were composed of retrotransposons that have lost their ability to jump around. Retrotransposons are RNA based mobile genetic elements which have the ability to duplicate themselves in the genome and are thus are found in many locations in eukaryotic genomes.
                <br />
                <hr align="center" width="60%" />
                The most commonly found example is LINE-1, which accounts for almost 17% of the human genome. LINE-1 produces the proteins ORF1p, ORF2p and the recently discovered ORF0 in order to carry out retrotransposition. By mining public proteomic data, we tried to find in which samples these proteins could be identified from in Mass spectrometry-based proteomic experiments.
              </div>
            </div>
          </div>
        </div>
        <div className="line-seperator" />
        <div className="background-body2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-justify">
                We also predicted genetic variants of LINE-1 proteins from the human reference genome (hg38) and in silico translated them to protein sequences and appended these to the proteomic search database for protein identification.
                <br />
                <hr
                  style={{ borderColor: "#000000" }}
                  align="center"
                  width="60%"
                />
                The results of these analyses can be found under the various navigation tabs of RTPEA.
              </div>
              <div className="col-md-6 font-italic">
                <img alt="L1cycle" src={L1cycle} height="300" />
                <br />
                Fig 2 - L1 life-cycle
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/24818067">
                  <br />Viollet et al. 2014
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="line-seperator" />

        <div className="background-body3" />
      </div>
    </div>
    );
  }
}
export default Home;
