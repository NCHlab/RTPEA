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
			tissue_type: "",
			state_type: "both",
			orf_type: "",
			tissue_dropdown:[],
			orf_dropdown:[],
			noFilterData: false,
			siftScore: 80,
		};
		// Example States:
		// tissue_type: "breast cell line diseased",
		// state_type: "healthy",
		// orf_type: "ORF2P",

		this.SortVariantList = this.SortVariantList.bind(this);
		this.WaitingTime = this.WaitingTime.bind(this);
		this.genDropDown = this.genDropDown.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}


	componentDidMount = () => {
		// Get the tissue data thats available for both ORF1p & ORF2p
		fetch(this.props.urlSource+'/select_data')
		.then(response => response.json())
		.then(data => {this.setState({tissue_dropdown: data['Tissue']})})
	}


	handleCheckboxChange = (e) => {
		var healthy_checkbox = document.getElementById("healthy").checked
		var disease_checkbox = document.getElementById("diseased").checked

		if (healthy_checkbox === true && disease_checkbox === true || healthy_checkbox === false && disease_checkbox === false){
			this.setState({state_type: "both"})
		} else if (healthy_checkbox === true){
			this.setState({state_type: "healthy"})
		} else {
			this.setState({state_type: "diseased"})
		}
	}


	genDropDown = () => {
		const tissueListItems = this.state.tissue_dropdown.sort().map((tissue) => <option key={tissue} value={tissue}>{tissue}</option>);
		return (
			<div className="container" style={{paddingLeft:'17%'}}>
			<table style={{borderSpacing: '50px 0'}}>
			<tbody>
				<tr>
					<th>Tissue</th>
					<th>State</th>
					<th>Minimum Score</th>
				</tr>
				<tr>
					<td style={{padding: '0px 20px'}}>
						<select className="form-control" id="tissue_dropdown" onChange={e => this.setState({tissue_type:e.target.value})}>
							<option value="">-</option>
							{tissueListItems}
						</select>
					</td>

					<td style={{padding: '0px 20px'}}>
						<input className="form-check-input" id="healthy" type="checkbox" onChange={e => this.handleCheckboxChange()}/> Healthy <br/>
						<input className="form-check-input" id="diseased" type="checkbox" onChange={e => this.handleCheckboxChange()}/> Diseased
					</td>

					<td style={{padding: '0px 20px'}}>
						<select className="form-control" id="siftScore" onChange={e => this.setState({siftScore: e.target.value})}>
							<option value="80">High Confidence</option>
							<option value="60">Med Confidence</option>
							<option value="0">Low Confidence</option>
						</select>
					</td>
				</tr>
			</tbody>
			</table>
			</div>
		)
	}


	runAgain = (e,orf) => {

		fetch(this.props.urlSource+'/newvis/'+orf+'/'+this.state.tissue_type+'/'+this.state.state_type+'/'+this.state.siftScore)
		.then(response => response.json())
		.then(data =>{
				if (data[0]['features'].length < 1){
					this.setState({noFilterData: true})
				} else {
					this.setState({noFilterData: false})
				}
			})

		var instance = new ProtVista({})
		var yourDiv = document.getElementById('protvis');
		var instance = new ProtVista({
					el: yourDiv,
					defaultSources: false,
					customDataSource: {
					url: this.props.urlSource+'/newvis/'+orf+'/'+this.state.tissue_type+'/'+this.state.state_type+'/'+this.state.siftScore,
					source: 'Proteomics_QMUL',
					useExtension: false,
					overwritePredictions: true
				},
					customConfig: this.props.urlSource+'/visualise_config.json/'
			});
		setTimeout(() => this.removeOldList(), 500)

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


	removeOldList = () => {
		var tissue_dropdown = document.getElementById("tissue_dropdown").value
		var list, i,j,k, switching, b, shouldSwitch;
		list = document.getElementById("orderthelist");
		if (list !== null){
			b = list.getElementsByTagName("LI");

			//Loop through all list-items:
			for (i = 1; i < (b.length); i++) {

				if (b[i].className !== tissue_dropdown && b[i].className !== tissue_dropdown + " diseased" && b[i].className !== tissue_dropdown + " meta_missing"){
					var listRow = document.getElementsByClassName(b[i].className)
					for (k = 0; k < listRow.length; k++){
						if (b[i].className.includes('breast')){
							if (b[i].className === 'breast' && listRow[k].className !== 'breast cell line' && listRow[k].className !== 'breast cell line diseased'){
								listRow[k].innerHTML = ""
							} else if (b[i].className === 'breast cell line' && listRow[k].className !== 'breast' && listRow[k].className !== 'breast diseased'){
								listRow[k].innerHTML = ""
								}
						} else {
							listRow[k].innerHTML = ""
						}
					}
				}
			}
		}
	}


	WaitingTime= () => {
		setTimeout(() => {this.SortVariantList()}, 500)
	}


	button_click = (event) => {
		this.setState({ uniprotacc: event })
	}

	render() {
		return (
			<div>
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
										<div className="alert alert-info">
											<b>To filter by tissue type, <u>DOUBLE CLICK</u> the tissue (or click each one once to show multiple)</b>
										</div>

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


				<div className="container">
					<br/>
					<div className="line-seperator"></div>
				<br/>
				</div>


				{this.genDropDown()}




					<br/>
					<div className="container">
						<br/>
						<div className="line-seperator"></div>
					<br/>
					</div>

	

					<div style={{background:"linear-gradient(to bottom, #598bb7, #f2f2f2)"}}>
						<br/>
						{this.state.noFilterData === true ? 'There are 0 results for selected filters' : ''}
						<br/>
						<button
                      className="btn btn-primary"
                      onClick={e => {this.runAgain(e,'ORF1P')}}
                    >
                      ORF1p
                    </button>
					&nbsp;
					<button
                      className="btn btn-primary"
                      onClick={e => {this.runAgain(e,'ORF2P')}}
                    >
                      ORF2p
                    </button>
						<br/>
						<div className="container alert alert-info alert-dismissible">
							<a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
							<b>To filter by tissue type, <u>DOUBLE CLICK</u> the tissue (or click each one once to show multiple)</b>
						</div>

						{window.location.pathname === "/visualise/TEST" ? <button className="btn btn-outline-danger" disabled>You are observing test data, click ORF1/2p above for real datasets</button>:""}
						<br/>
						<br/>
					</div>
					<div style={{background:"linear-gradient(to bottom, #f2f2f2, #e0e0e0)"}}>

				<div className="container">
					<div id="protvis">
						{/* ProtVista Loads Here */}
					</div>
				</div>
				<div style={{background:"linear-gradient(to bottom, #e5e5e5, #99cdff)"}}>
				<br/>
				<br/>
				<br/>
				<br/>
				</div>
			</div>
				
				{window.onload = this.WaitingTime()}
				




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
		</div>
		);
	}
}

export default Visualisation;
