import React, { Component } from "react";
import Sequence from "sequence-viewer";
import NavVis from "./NavVis.js";
import { CopyToClipboard } from "react-copy-to-clipboard";


class Sequence_view extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prot_seq: this.props.match.params.id,
			hs_pa: "",
			// prot_seq: this.props.match.params.id === undefined ? this.setState({prot_seq:"1"}) : this.props.match.params.id,
			seq_data: [{

		}],
		};
		// if (this.state.seq_data[0].Sequence === undefined){
		// 	this.setState({seq_data: {"Family":"NA",
		// 															"Sequence":"You Did Not Request Any Data"}})
		// }

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


			// fetch("http://rtpea.com/sequence/" + this.state.prot_seq)
			fetch("http://localhost:3001/sequence/" + this.state.prot_seq)
			.then(response => response.json())
			.then(data => {this.setState({seq_data: data})})
			.then(data => {
				// console.log(this.state.seq_data[0])

			var seq1 = new Sequence(this.state.seq_data[0].Sequence);
			// You can add some rendering options
			seq1.render("#sequence-viewer", {
			"showLineNumbers": true,
			"wrapAminoAcids": true,
			"charsPerLine": 100,
			"toolbar": false,
			"search": false,
			// "title" : "Sequence View",
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
			    {start: 1000, end: 1100, color: "#ff0000", underscore: false},
					{start: 1200, end: 1240, color: "#7cff26", underscore: false}
			];


			seq1.coverage(exampleSequenceCoverage);

			var exampleLegend = [
		    {name: "???? Protein", color: "#ff0000", underscore: false},
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


)

}
// This function allows the user to save the data as a file.
saveAs = (
	content,
	filename = this.state.seq_data[0].Family + ".fasta",
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

// UISED FOR DOWNLOADING PA AND HS DATA
saveAs2 = (
	content,
	filename = this.state.hs_pa + ".fasta",
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
			<div className="white-background">
			<div className="white-darker-background">
				<div className="text-center" style={{color:"black"}}>
					<h1>Protein Sequence Viewer</h1>

				</div>
				<div className="container">
				<hr style={{borderColor:"black"}}/>
				<div style={{color:"black"}}>
					Enter Protein Family:
				</div>

				<input
					style={{"width" : "310px"}}
          placeholder="e.g HS_1_ORF1p, LINE_1_HS_1_ORF1p"
          onChange={e => this.setState({ prot_seq: e.target.value.slice(0,-1).toUpperCase()+e.target.value.slice(-1).toLowerCase() })}
          onKeyPress={e => {if (e.key === "Enter") {
						if (window.location.pathname === "/sequence"){
							window.location = "sequence/" + e.target.value.slice(0,-1).toUpperCase()+e.target.value.slice(-1).toLowerCase();
						} else {
							window.location = e.target.value.slice(0,-1).toUpperCase()+e.target.value.slice(-1).toLowerCase();
							 {/* e.target.value.slice(0,-1).toUpperCase()+e.target.value.slice(-1) */}
						}

            }
          }}/>

{/* text={this.state.seq_data[0].Sequence}> */}

					<CopyToClipboard
            text={this.state.seq_data[0].Sequence}>
            <button className="btn btn-outline-info">Copy Sequence</button>
          </CopyToClipboard>

					<button className="btn btn-outline-info"
            onClick={e =>
              this.saveAs(">"+this.state.seq_data[0].Family+"\n"+this.state.seq_data[0].Sequence)
            }
          >
            Download
          </button>

					<br/>
					<sup style={{"color":"black"}}>^ You must provide ORF1p or ORF2p at the end ^</sup>
					<br/>

					</div>
					<div className="container">
					<hr style={{borderColor:"black"}}/>
					</div>
				</div>
			<div className="white-background">
				{/* {JSON.stringify(this.state.annotation_data)}
				<br/>
				{JSON.stringify(this.state.annotation_data[0])} */}
      <div id="sequence-viewer" className="container black_text"></div>
			<div className="container">
				<hr style={{borderColor:"black"}}/>
			</div>
			<div className="container">
				<button className="btn btn-outline-info"
					onClick={e =>{
						this.setState({hs_pa: "HS"})
						fetch("http://localhost:3001/sequence/Hs")
						// fetch("http://rtpea.com/sequence/Hs")
						.then(response => response.json())
						.then(data => {
							var list_data = []
							{/* var joined_data = "" */}
							for (var i = 0; i < data.length; i++) {
								list_data.push(">"+data[i].Family+"\n"+data[i].Sequence)
							}
							{/* var joined_data = list_data.join().replace(/,/g,"\n") */}
							 this.saveAs2(list_data.join().replace(/,/g,"\n"))
							 {/* this.saveAs(joined_data) */}
					})
				}
				}
				>
					Download ALL HS
				</button>

				<button className="btn btn-outline-info"
					onClick={e =>{
						this.setState({hs_pa: "PA"})
						fetch("http://localhost:3001/sequence/Pa")
						// fetch("http://rtpea.com/sequence/Pa")
						.then(response => response.json())
						.then(data => {
							var list_data = []
							{/* var joined_data = "" */}
							for (var i = 0; i < data.length; i++) {
								list_data.push(">"+data[i].Family+"\n"+data[i].Sequence)
							}
							{/* var joined_data = list_data.join().replace(/,/g,"\n") */}
							 this.saveAs2(list_data.join().replace(/,/g,"\n"))
							 {/* this.saveAs(joined_data) */}
					})
				}
				}
				>
					Download ALL PA
				</button>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
		</div>
    );
  }
}




export default Sequence_view;
