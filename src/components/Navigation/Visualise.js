import React, { Component } from "react";
import ProtVista from "ProtVista";
import 'ProtVista/style/main.css';
import configFile from "./config.json"
// import jsontest from "./externalFeatures_P05067.json";

class Visualisation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uniprotacc: this.props.match.params.id,
			information1: "",
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



				var yourDiv = document.getElementById('protvis');
        var instance = new ProtVista({
            el: yourDiv,
            uniprotacc: this.state.uniprotacc,
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
		        source: 'my_data',
		        useExtension: false
						},
						// customConfig: "ProtVista/src/config.json"
						customConfig: 'http://localhost:3001/visualise_config.json/'
						// customConfig: './data/externalConfig.json',
        });
    }

  button_click = (e) => {
		// console.log(e)
		this.setState({ uniprotacc: e })
	}

	render() {
		return (
			<div className="background-body-vis">
				{console.log(configFile)}

				<div className="container">
					{/* {console.log(jsontest)} */}
					{/* {console.log(this.state.information1)} */}
					<hr/>
				</div>
				Enter PXD:
				<input
          placeholder=""
          onChange={e => this.setState({ uniprotacc: e.target.value.toUpperCase() })}
          onKeyPress={event => {if (event.key === "Enter") {
              this.button_click(event.target.value.toUpperCase());
            }
          }}/>

					<br/>
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

			</div>
		);
	}
}

export default Visualisation;
