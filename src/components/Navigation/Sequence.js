import React, { Component } from "react";
import Sequence from "sequence-viewer";
import NavVis from "./NavVis.js";


class Sequence_view extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prot_seq: this.props.match.params.id,
			// prot_seq: this.props.match.params.id === undefined ? this.setState({prot_seq:"1"}) : this.props.match.params.id,
			seq_data: [{

	    }],
		};
		// this.searchURL = this.searchURL.bind(this)

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
			// console.log("http://localhost:3001/sequence/" + this.state.prot_seq)
			// var prot_seq = (this.props.match.params.id === undefined) ? "1" : this.props.match.params.id
			// console.log(this.props)
			// if (this.props === null){
			// 	var prot_seq = "1"
			// } else {
			// 	var prot_seq = this.props.match.params.id
			// }
			fetch("http://localhost:3001/sequence/" + this.state.prot_seq)
			.then(response => response.json())
			.then(data => {this.setState({seq_data: data})})
			.then(data => {
				console.log(this.state.seq_data[0])

			var seq1 = new Sequence(this.state.seq_data[0].Sequence);
			// You can add some rendering options
			seq1.render("#sequence-viewer", {
			"showLineNumbers": true,
			"wrapAminoAcids": true,
			"charsPerLine": 100,
			"toolbar": false,
			"search": true,
			"title" : "Sequence View",
			"sequenceMaxHeight": "500px",
			"badge": false
			});
			seq1.selection(20, 43, 'red');

			var onclickFun = function(e) {
			  console.log(e.target.textContent);
			}

			//Coverage list
			var exampleSequenceCoverage = [
			    {start: 0, end: 25, color: "black", underscore: false, bgcolor: "#ffd891"},
			    {start: 25, end: 47, color: "#ff0000", underscore: false, tooltip: "this is a tooltip"},
			    {start: 47, end: 54, color: "#ff0000", underscore: true},
			    {start: 54, end: 55, color: "#ff0000", underscore: false},
			    {start: 55, end: 56, color: "black", underscore: false},
			    {start: 56, end: 89, color: "#69CC33", underscore: false, onclick:onclickFun},
			    {start: 89, end: 90, color: "black", underscore: false},
			    {start: 90, end: 110, color: "#ff0000", underscore: false}
			];


			seq1.coverage(exampleSequenceCoverage);

			var exampleLegend = [
		    {name: "Mature Protein", color: "#ff0000", underscore: false},
		    {name: "Proteotypic peptide", color: "#69CC33", underscore: false},
		    {name: "Synthetic peptide",color: "#fff",underscore: true}
		    ];
			seq1.addLegend(exampleLegend);

			seq1.onMouseSelection(function(elem){
        console.log(elem.detail);
			    }
			);
			seq1.onSubpartSelected(function(elem){
			        console.log(elem.detail);
			    }
			);

		// 	fetch("http://localhost:3001/ideogram")
		// 	.then(response => response.json())
		// 	.then(data => {this.setState({annotation_data: data})})
		// 	.then( data => {
    // return new Ideogram({
    //   organism: 'human',
    //   dataDir: 'https://unpkg.com/ideogram@0.13.0/dist/data/bands/native/',
		// 	annotations: this.state.annotation_data,
		// 	annotationsLayout: "tracks",
		// 	onWillShowAnnotTooltip: hyperlinkProtein,
		// 	rotatable: true,
		//
    //   container: '#ideo-container'
    // });
		// })
	}


)}

  render() {
    return (
			<div className="background-body-vis">
				<NavVis/>

				<div className="text-center">
					<h1>Protein Sequence Viewer</h1>

				</div>
				{/* {JSON.stringify(this.state.annotation_data)}
				<br/>
				{JSON.stringify(this.state.annotation_data[0])} */}
      <div id="sequence-viewer" className="container black_text"></div>
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




export default Sequence_view;
