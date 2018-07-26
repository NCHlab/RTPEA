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

    fetch("http://localhost:3001/dbcheck")
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
      <div className="">
        <p className="App-intro">
          <h1 className="container colour-white">
            Retroelement Protein Expression Atlas
          </h1>
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
                  <div className="header"> How to use Interactive Image {"&"} Graph </div>
                  <div className="content">
                    {/* {" "} */}
                    By Default you can hover over the images to visualise the graph
                    <br />

                    <div className="header"></div>
                    <br />
                    TO CLICK THE TISSUE:
                    <br />
                    Ticking the box allows you to now select each tissue without the graph auto changing on hover.
                    <br />
                    <br />
                    You can also <b>click the graph</b> to transfer you to the table for that tissue type selected
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
            <Human />
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
                  <CountTo to={30} speed={4000} />
                </h1>
              </div>
              <div className="col-md-4">
                <h1>
                  {/* # of Orf2: */}
                  <CountTo to={1000} speed={4000} />
                  {/* onComplete={onHide} */}
                </h1>
              </div>
              <div className="col-md-4">
                <h1>
                  <CountTo to={300} speed={4000} /> GB
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
                  <b>RTPEA</b> is a database available publically which hosts
                  data generated by RetroMiner. It is a database that can be
                  accessed using our API and explored interactively.
                  <br />
                  <b>RetroMiner</b> uses unbiased proteomic approaches to
                  reanalyse PRIDE datasets to detect and identify retroelement
                  proteins.
                  <br />This allows for an understanding of how RT protein
                  expression and diseases may be linked and helps to create an
                  idea of expression levels across a range of diseases.
                  <br />
                  <hr style={{ borderColor: "#000000" }} />
                  <table>
                    <tr>
                      <th />
                      <th />
                    </tr>
                    <tr>
                      <td>
                        <b>Interactive:</b>
                      </td>
                      <td>
                        -<i>
                          Explore tissue to display RT ID, expressing loci, PTMs
                          e.t.c
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Browse:</b>
                      </td>
                      <td>
                        -<i>Search by dataset and by proteins</i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Visualise:</b>
                      </td>
                      <td>
                        -<i>
                          Uses Protvista, a viewer for protein sequence features
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>API:</b>
                      </td>
                      <td>
                        -<i>
                          Retrieve data located on the database for a specific
                          ID
                        </i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Genoverse:</b>
                      </td>
                      <td>
                        -<i>Maps identified peptides to the genome</i>
                      </td>
                    </tr>
                  </table>
                  <hr style={{ borderColor: "#000000" }} />
                  RTPEA is dedicated to displaying experimental parameters and
                  metadata free to use for anyone interested in protein datasets
                  and re-analysis using our API.
                  <br />
                  <br />
                  This website will also host proteomic data (not just RT data)
                  related to humans thus be accessible to all types of
                  biologists looking at protein expression.
                  <br />
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
                Repetitive DNA accounts for half of our genome. These repeats
                are usually composed of retrotransposons. Retrotransposons are
                RNA based mobile genetic elements which have the ability to
                duplicate thus are found in many locations of DNA in eukaryotic
                organsism.
                <br />
                <hr align="center" width="60%" />
                Two subclasses of transposons exist, retrotransposons and DNA
                transposons. Retrotransposons are similar to DNA based
                transposons, however there is one big difference.
              </div>
            </div>
          </div>
        </div>
        <div className="line-seperator" />
        <div className="background-body2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-justify">
                The DNA is transcribed by RNA polymerase into messenger RNA,
                however instead of being translated into a protein by a DNA
                based transposase enzyme, Reverse Transcriptase reverses the
                transcription that occured previously and creates a double
                stranded DNA copy of the RNA.
                <br />
                <hr
                  style={{ borderColor: "#000000" }}
                  align="center"
                  width="60%"
                />
                The new duplicated retrotransposon can then inserted into the
                same chromosome or another chromosome at a new location. This
                new replicated DNA, itself is able to be replicated. This is due
                to the fact that in retrotransposons, the mRNA starts upstream
                of the promoter so the new copy also contains the promoter and
                the cycle continues.
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
    );
  }
}
export default Home;
