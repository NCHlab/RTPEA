import React, { Component } from "react";
import Ideogram from "ideogram";
import NavVis from "./NavVis.js";

class Ideogram_c extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			value:"",
			prot_seq: this.props.match.params.id,
			// prot_seq: this.props.match.params.id  == undefined ? 1 : this.props.match.params.id,
			annotation_data: [{

	    }],
			// annotationTracks:[
      // {id: 'pathogenicTrack', displayName: 'Pathogenic', color: '#F00', shape: "Triangle"},
      // {id: 'uncertainSignificanceTrack', displayName: 'Uncertain significance', color: '#CCC', shape: "Triangle"},
      // {id: 'benignTrack',  displayName: 'Benign', color: '#8D4', shape: "Triangle"}],

		};

		this.PA2_family = this.PA2_family.bind(this);
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	// [{
	// 	"_id": "5b364f11cf72732a72cb47c1",
	// 	"name": "BRCA1",
	// 	"chr": "17",
	// 	"start": 43044294,
	// 	"stop": 43125482
	// }]

		componentDidMount = () => {
			// var annotationTracks =

		function 	hyperlinkProtein(annot) {
    // var term = '(' + annot.name + '[gene])+AND+(Homo+sapiens[orgn])';
		// Substring used to only search for LINE_1
    var url = 'https://www.uniprot.org/uniprot/?query=' + annot.name.substring(0,6) + '&sort=score';
    annot.displayName =
      '<a target="_blank" href="' + url + '">' + annot.name + '</a>';
			// console.log(annot.testdata)
    return annot
  }

			fetch("http://localhost:3001/ideogram/" + this.state.prot_seq)
			.then(response => response.json())
			.then(data => {this.setState({annotation_data: data})})
			.then( data => {
    return new Ideogram({
      organism: 'human',
      dataDir: 'https://unpkg.com/ideogram@0.13.0/dist/data/bands/native/',
			annotations: this.state.annotation_data,
			annotationsLayout: "tracks",
			onWillShowAnnotTooltip: hyperlinkProtein,
			rotatable: true,

			// chrHeight: 400,
			// chromosome: "10",
			// orientation: 'vertical',
			// showBandLabels: true,
			// brush: 'chr1',

			// brush: 'chr10:104325484-119977655',
			// annotationsDisplayedTracks: [0,1, 2,3],
			// annotationTracks: this.state.annotationTracks,
			// annotationsPath: "http://localhost:3001/ideogram",
			// annotationsColor: "#F00",
			// annotationsLayout: annotationTracks,
		// 	annotations: [{
		// 	"_id": "5b364f11cf72732a72cb47c1",
    //   "name": "BRCA1",
    //   "chr": "17",
    //   "start": 43044294,
    //   "stop": 43125482
    // }],
      container: '#ideo-container'
    });
		})
  }

	PA2_family = () => {

   this.setState({
		 checked: !this.state.checked
   })
		 // this.props.history.push('/ideogram/'+PA2_fam)
		 // window.location = '/ideogram/'+PA2_fam

}
	 handleChange = (event) => {
	  this.setState({value: event.target.value});
	 }

	 handleSubmit = (event) => {

	var PA2_fam = [
   "PA2_1",
   "PA2_10",
   "PA2_11",
   "PA2_12",
   "PA2_13",
   "PA2_14",
   "PA2_15",
   "PA2_16",
   "PA2_17",
   "PA2_18",
   "PA2_19",
   "PA2_2",
   "PA2_20",
   "PA2_21",
   "PA2_22",
   "PA2_23",
   "PA2_24",
   "PA2_25",
   "PA2_26",
   "PA2_27",
   "PA2_28",
   "PA2_29",
   "PA2_3",
   "PA2_30",
   "PA2_31",
   "PA2_32",
   "PA2_33",
   "PA2_34",
   "PA2_35",
   "PA2_4",
   "PA2_5",
   "PA2_6",
   "PA2_7",
   "PA2_8",
   "PA2_9",
   "PA3_1"
 ]
 var HS_fam = [
  "HS_1",
  "HS_10",
  "HS_100",
  "HS_101",
  "HS_102",
  "HS_103",
  "HS_104",
  "HS_105",
  "HS_106",
  "HS_107",
  "HS_108",
  "HS_109",
  "HS_11",
  "HS_110",
  "HS_111",
  "HS_112",
  "HS_113",
  "HS_114",
  "HS_115",
  "HS_116",
  "HS_117",
  "HS_118",
  "HS_119",
  "HS_12",
  "HS_120",
  "HS_121",
  "HS_122",
  "HS_13",
  "HS_14",
  "HS_15",
  "HS_16",
  "HS_17",
  "HS_18",
  "HS_19",
  "HS_2",
  "HS_20",
  "HS_21",
  "HS_22",
  "HS_23",
  "HS_24",
  "HS_25",
  "HS_26",
  "HS_27",
  "HS_28",
  "HS_29",
  "HS_3",
  "HS_30",
  "HS_31",
  "HS_32",
  "HS_33",
  "HS_34",
  "HS_35",
  "HS_36",
  "HS_37",
  "HS_38",
  "HS_39",
  "HS_4",
  "HS_40",
  "HS_41",
  "HS_42",
  "HS_43",
  "HS_44",
  "HS_45",
  "HS_46",
  "HS_47",
  "HS_48",
  "HS_49",
  "HS_5",
  "HS_50",
  "HS_51",
  "HS_52",
  "HS_53",
  "HS_54",
  "HS_55",
  "HS_56",
  "HS_57",
  "HS_58",
  "HS_59",
  "HS_6",
  "HS_60",
  "HS_61",
  "HS_62",
  "HS_63",
  "HS_64",
  "HS_65",
  "HS_66",
  "HS_67",
  "HS_68",
  "HS_69",
  "HS_7",
  "HS_70",
  "HS_71",
  "HS_72",
  "HS_73",
  "HS_74",
  "HS_75",
  "HS_76",
  "HS_77",
  "HS_78",
  "HS_79",
  "HS_8",
  "HS_80",
  "HS_81",
  "HS_82",
  "HS_83",
  "HS_84",
  "HS_85",
  "HS_86",
  "HS_87",
  "HS_88",
  "HS_89",
  "HS_9",
  "HS_90",
  "HS_91",
  "HS_92",
  "HS_93",
  "HS_94",
  "HS_95",
  "HS_96",
  "HS_97",
  "HS_98",
  "HS_99"
]
	if (this.state.value === "PA2"){
		this.props.history.push('/ideogram/'+PA2_fam)
	} else if (this.state.value === "HS"){
		this.props.history.push('/ideogram/'+HS_fam)
	} else {
		this.props.history.push('/ideogram/')
	}
	}





  render() {


    return (
			<div className="background-body-vis">

				<NavVis/>
				<div className="text-center">
					<h1>Chromosome Centric Mapper</h1>

				</div>
				<div className="container">
					{/* {console.log(jsontest)} */}
					{/* {console.log(this.state.information1)} */}
					<hr/>
				</div>
				Enter Family:
				<input
					style={{"width" : "400px"}}
          placeholder="e.g LINE_1_HS_101, HS_4, PA2_34, LINE_1_PA2_25_ORF1p"
          onChange={e => this.setState({ prot_seq: e.target.value.toUpperCase() })}
          onKeyPress={event => {if (event.key === "Enter") {
						if (window.location.pathname === "/ideogram"){
							window.location = "ideogram/" + event.target.value.toUpperCase();
						} else {
							window.location = event.target.value.toUpperCase();
						}

            }
          }}/>
					<br/>
				  <sup style={{"color":"white"}}>^ Separate families with comma or space ^</sup>

					<br/>
{/* onChange={() => this.PA2_family()}/> */}
					 {/* <input type="checkbox"
						 checked={ this.state.checked }
						 onChange={e => this.setState({ prot_seq: PA2_fam })}/> */}


			 <form onSubmit={this.handleSubmit}>
	        <label>
						<select value={this.state.value} onChange={this.handleChange}>
							<option selected value="">ALL</option>
							<option value="HS">HS</option>
						  <option value="PA2">PA2</option>
						  <option value="PA1">PA1</option>
						  <option value="HA">HA</option>
						</select>
					</label>
			<input type="submit" value="Submit" />
		</form>



					<div className="container">
						<hr/>
					</div>
				{/* {JSON.stringify(this.state.annotation_data)}
				<br/>
				{JSON.stringify(this.state.annotation_data[0])} */}
      <div id="ideo-container" className="black_text margin-left-ideogram"></div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
    );
  }
}




export default Ideogram_c;
