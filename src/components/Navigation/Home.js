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

// Displays the Home page using JSX
// const  = ({ onShow, onHide }) => {

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    const data = [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
    ];

    return (
      <div className="">
        <p className="App-intro">
          <h1 className="container colour-white">
            Retroelement Protein Expression Atlas
          </h1>
        </p>
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
              <div className="col-md-6">
                <h1>
                  {/* # of Orf1: */}
                  <CountTo to={1608424} speed={3000} />
                </h1>
              </div>
              <div className="col-md-6">
                <h1>
                  {/* # of Orf2: */}
                  <CountTo to={2934451} speed={3000} />
                  {/* onComplete={onHide} */}
                </h1>
              </div>
            </div>
            <br />
          </div>
          <div className="line-seperator" />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-justify">
                Repetitive DNA accounts for half of our genome. These repeats
                are usually composed of retrotransposons. Retrotransposons are
                RNA based mobile genetic elements which have the ability to
                duplicate thus are found in many locations of DNA in eukaryotic
                organsism. Two subclasses of transposons exist, retrotransposons
                and DNA transposons. Retrotransposons are similar to DNA based
                transposons, however there is one big difference.
              </div>
              <div className="col-md-6 font-italic">
                <img alt="L1HS" src={L1HS} height="300" />
                <br />
                Fig 1 - Proportion of L1-Human-specific elements in the human reference
                genome.
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/20980553">
                  <br />Ewing et al. 2011{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="line-seperator" />
        <div className="background-body2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 font-italic">
                <img alt="L1cycle" src={L1cycle} height="300" />
                <br />
                Fig 2 - L1 life-cycle
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/24818067">
                  <br />Viollet et al. 2014{" "}
                </a>
              </div>
              <div className="col-md-6 text-justify">
                The DNA is transcribed by RNA polymerase into messenger RNA,
                however instead of being translated into a protein by a DNA
                based transposase enzyme, Reverse Transcriptase reverses the
                transcription that occured previously and creates a double
                stranded DNA copy of the RNA. The new duplicated retrotransposon
                can then inserted into the same chromosome or another chromosome
                at a new location. This new replicated DNA, itself is able to be
                replicated. This is due to the fact that in retrotransposons,
                the mRNA starts upstream of the promoter so the new copy also
                contains the promoter and the cycle continues.
              </div>
            </div>
          </div>
        </div>
        <div className="line-seperator" />

        <div className="background-body3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-justify">Text</div>
              <div className="col-md-6 font-italic">
                <LineChart
                  width={600}
                  height={300}
                  data={data}
                  onClick={e => this.check_event(e)}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
