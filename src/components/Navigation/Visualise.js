import React, { Component } from "react";
import ProtVista from "ProtVista";
import 'ProtVista/style/main.css';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Ideogram from './Ideogram';
import Sequence from './Sequence';
import NavVis from "./NavVis.js";

// import configFile from "./config.json"
// import jsontest from "./externalFeatures_P05067.json";

class Visualisation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uniprotacc: this.props.match.params.id,
			data_info: "",
		};

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
            begin: 117,
            end: 117,
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
		        url: 'http://localhost:3001/visualise/',
		        source: 'Proteomics_QMUL',
		        useExtension: false,
						overwritePredictions: true
					},
						// customConfig: "ProtVista/src/config.json"
						customConfig: 'http://localhost:3001/visualise_config.json/'
						// customConfig: './data/externalConfig.json',
        });
			// }))
				//
				// instance.selectFeature('variant', 108, 108, 'K')
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
					<h1>ProtVister Protein Viewer</h1>

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
