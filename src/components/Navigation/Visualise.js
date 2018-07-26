import React, { Component } from "react";
import ProtVista from "ProtVista";
import 'ProtVista/style/main.css';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Ideogram from './Ideogram';
import Sequence from './Sequence';
import NavVis from "./NavVis.js";
import Popup from "reactjs-popup";
import protvis_example from "../Images/protvis_example.png"
import protvis_filter from "../Images/protvis_filter.png"
import protvis_conf from "../Images/protvis_conf.png"

// import configFile from "./config.json"
// import jsontest from "./externalFeatures_P05067.json";

class Visualisation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uniprotacc: this.props.match.params.id,
			data_info: "",
		};

		this.SortVariantList = this.SortVariantList.bind(this);
		this.WaitingTime = this.WaitingTime.bind(this);
	}


	componentDidMount = () => {
        // const script = document.createElement("script");
				//
        // script.src = "https://use.typekit.net/foobar.js";
        // script.async = true;
				//
        // document.body.appendChild(script);
				// fetch("http://localhost:3001/P05067.json")
				// .then(response => response.json())
				// .then(data => this.setState({information1: data}))


				// .then(data =>{return
			// fetch("http://localhost:3001/visualise/" + this.props.match.params.id)
			// .then(response => response.json())
			// .then(data => this.setState({data_info: data}))



			 var yourDiv = document.getElementById('protvis');
       var instance = new ProtVista({
            el: yourDiv,
            uniprotacc: this.state.uniprotacc,
						selectedFeature: {
            begin: 166,
            end: 166,
            type: "variant",
						alternativeSequence:"Q"
					},
						// uniprotacc : 'P05067',
						// defaultSources: false
						exclusions: ['SEQUENCE_INFORMATION', 'STRUCTURAL', 'TOPOLOGY', 'MUTAGENESIS', 'MOLECULE_PROCESSING'],
						// categoryOrder: ['DOMAINS_AND_SITES', 'VARIATION', 'PTM'],
						// selectedFeature: {
            // begin: 96,
            // end: 110,
            // type: 'REGION'
            // }
						//Default sources will **not** be included

						// customDataSource: {
		        // url: './externalFeatures_',
		        // source: 'P05067',
		        // useExtension: true
						// },
						// overwritePredictions: true,

						defaultSources: false,
						customDataSource: {
						// url: 'https://rtpea.com/visualise/',
		        // url: 'http://localhost:3001/visualise/',
						url: this.props.urlSource+'/visualise/',
		        source: 'Proteomics_QMUL',
		        useExtension: false,
						overwritePredictions: true
					},
						// customConfig: "ProtVista/src/config.json"
						// customConfig: 'https://rtpea.com/visualise_config.json/'
						// customConfig: 'http://localhost:3001/visualise_config.json/'
						customConfig: this.props.urlSource+'/visualise_config.json/'
						// customConfig: './data/externalConfig.json',
        });
			// }))
				//
				// instance.selectFeature('variant', 108, 108, 'K')

}

		SortVariantList = () => {
			try {
			  var list, i, switching, b, shouldSwitch;
			  list = document.getElementById("orderthelist");
			  switching = true;
			  /*Make a loop that will continue until
			  no switching has been done:*/
			  while (switching) {
				//start by saying: no switching is done:
				switching = false;
				b = list.getElementsByTagName("LI");
				//Loop through all list-items:
				for (i = 1; i < (b.length - 1); i++) {
				  //start by saying there should be no switching:
				  shouldSwitch = false;
				  /*check if the next item should
				  switch place with the current item:*/
				  if (b[i].innerText.toLowerCase() > b[i + 1].innerText.toLowerCase()) {
					/*if next item is alphabetically
					lower than current item, mark as a switch
					and break the loop:*/
					shouldSwitch = true;
					break;
				  }
				}
				if (shouldSwitch) {
				  /*If a switch has been marked, make the switch
				  and mark the switch as done:*/
				  b[i].parentNode.insertBefore(b[i + 1], b[i]);
				  switching = true;
				}
			  }
			}
			catch(err){

			}
		}

	WaitingTime= () => {
  setTimeout(() => this.SortVariantList(), 500);
}





		// componentDidUpdate = () => {
		// 	instance.selectFeature("variant", 125, 128, 'VAS');
		// }


  button_click = (event) => {
		// console.log(e)
		this.setState({ uniprotacc: event })
	}

	render() {
		return (
			<div>

				{console.log(this.state.data_info)}

			<div className="background-body-vis">
				<NavVis/>
				<div className="text-center">
					<h1>ProtVista Protein Viewer</h1>
					<div className="" style={{color:"black"}}>
						<Popup trigger={<button className="btn btn-outline-warning"> Information! </button>} modal>
							{close => (
								<div className="">
									<a className="close" onClick={close}>
										&times;
									</a>
									<div className="header"> <b>ProtVista</b> </div>
									<div className="content">
										{/* {" "} */}
										To view variants, click the variant tab.
										<br/>
										<b>To filter by tissue type, <u>DOUBLE CLICK</u> the tissue (or click each one once to show multiple)</b>
										<br />
										<img src={protvis_filter} alt="protvis_example!" />
										<div className="header"></div>
										<b>Colour Gradient:</b>
										<br/>
										<img src={protvis_conf} alt="protvis_example!" />
										<br/>
										Darker version of colour = Higher confidence
										<br/>
										Lighter version of colour = Lower confidence
										<div className="header"></div>
										<b>Variant Example</b>:
										<br />
										<img src={protvis_example} alt="protvis_example!" />

										<div className="header"></div>
										ProtVista was made possible thanks to the <a href="http://ebi-uniprot.github.io/ProtVista/">uniprot team</a> and Xavier Watkins for its creation.
										<br/>
										ProtVista was heavily modified by RTPEA to produce the visualisations that we require.
										<div className="header"></div>
									 	ProtVista: visualization of protein sequence annotations (doi: <a href="https://academic.oup.com/bioinformatics/article/33/13/2040/3063132">10.1093/bioinformatics/btx120</a>)


									</div>
								</div>
							)}
						</Popup>
						</div>
				</div>

				{/* <Tabs>
			    <TabList>
			      <Tab>Protein Centric</Tab>
			      <Tab>Chromosome Centric</Tab>
						<Tab>Sequence Viewer</Tab>
			    </TabList> */}

			    {/* <TabPanel forceRender={true}> */}


				{/* <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
				  <Tab eventKey={1} title="Protein Centric">
				    Tab 1 content
				  </Tab>
				  <Tab eventKey={2} title="Chromosome Centric">
				    tea
				  </Tab>
				</Tabs> */}
				{/* {console.log(configFile)} */}

				<div className="container">
					{/* {console.log(jsontest)} */}
					{/* {console.log(this.state.information1)} */}
					<hr/>
				</div>
				Enter Protein:
				<input
          placeholder="e.g. ORF1p"
          onChange={e => this.setState({ uniprotacc: e.target.value.toUpperCase() })}
          onKeyPress={event => {if (event.key === "Enter") {
						if (window.location.pathname === "/visualise"){
							window.location = "visualise/" + event.target.value.toUpperCase();
						} else {
							window.location = event.target.value.toUpperCase();
						}

            }
          }}/>

					{/* <input
	          placeholder=""
	          onChange={e => this.setState({ uniprotacc: e.target.value.toUpperCase() })}
	          onKeyPress={event => {if (event.key === "Enter") {
	              this.button_click(event.target.value.toUpperCase());
	            }
	          }}/> */}

					<br/>
					<div className="container">
						<hr/>
					</div>

				<div className="container">
					<div id="protvis">
						{/* ProtVista Loads Here */}
					</div>
				</div>
				{/* <button onClick={() => this.sortList()}>CLICK </button> */}
				{window.onload = this.WaitingTime()}
				{console.log(this.props.match.params.id)}




				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
			{/* </TabPanel>
			<TabPanel>
			<Ideogram/>
			</TabPanel>
			<TabPanel>
			<Sequence/>
			</TabPanel>
		</Tabs> */}
			</div>
		</div>
		);
	}
}

export default Visualisation;
