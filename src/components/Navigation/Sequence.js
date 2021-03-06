import React, { Component } from "react";
import Sequence from "sequence-viewer";

import { CopyToClipboard } from "react-copy-to-clipboard";


class Sequence_view extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prot_seq: this.props.match.params.id,
			hs_pa: "",
			seq_data: [{}],
			seq_data2: [{}],
		};
	}


		componentDidMount = () => {

			fetch(this.props.urlSource+"/sequence/" + this.state.prot_seq + "_ORF1p" )
			.then(response => response.json())
			.then(data => {this.setState({seq_data: data})})
			.then(data => {

			var seq1 = new Sequence(this.state.seq_data[0].Sequence);
			// You can add some rendering options
			seq1.render("#sequence-viewer", {
				"showLineNumbers": true,
				"wrapAminoAcids": true,
				"charsPerLine": 100,
				"toolbar": false,
				"search": false,
				"title" : "Protein Sequence ORF1p",
				"sequenceMaxHeight": "500px",
				"badge": false
			});

			var onclickFun = function (e) {
				console.log(e.target.textContent);
			};
			  
			seq1.onMouseSelection(function (elem) {
				console.log(elem.detail);
				// copyToClipboard(elem.detail.selection)
			});
			  
			seq1.onSubpartSelected(function (elem) {
				console.log(elem.detail);
			});
			  
		}

		)


			fetch(this.props.urlSource+"/sequence/" + this.state.prot_seq + "_ORF2p" )
			.then(response => response.json())
			.then(data => {this.setState({seq_data2: data})})
			.then(data => {

			var seq2 = new Sequence(this.state.seq_data2[0].Sequence);
				// You can add some rendering options
				seq2.render("#sequence-viewer2", {
				"showLineNumbers": true,
				"wrapAminoAcids": true,
				"charsPerLine": 100,
				"toolbar": false,
				"search": false,
				"title" : "Protein Sequence ORF2p",
				"sequenceMaxHeight": "500px",
				"badge": false
			});

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



			var exampleLegend = [
		    {name: "???? Protein", color: "#ff0000", underscore: false},
		    {name: "Proteotypic peptide", color: "#69CC33", underscore: false},
		    {name: "Synthetic peptide",color: "#fff",underscore: true}
		    ];

			seq2.onMouseSelection(function(elem){
        		console.log(elem.detail);
				// copyToClipboard(elem.detail.selection)
			});

			seq2.onSubpartSelected(function(elem){
			    console.log(elem.detail);
			});

	}
)

}

// This function allows the user to save the data as a file.
saveAs = (
	content,
	filename = this.state.prot_seq + ".fasta",
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
          placeholder="e.g HS_1, LINE_1_HS_1"
          onChange={e => this.setState({ prot_seq: e.target.value.slice(0,-1).toUpperCase()+e.target.value.slice(-1).toLowerCase() })}
          onKeyPress={e => {if (e.key === "Enter") {
						if (window.location.pathname === "/sequence"){
							window.location = "sequence/" + e.target.value.slice(0,-1).toUpperCase()+e.target.value.slice(-1).toLowerCase();
						} else {
							window.location = e.target.value.slice(0,-1).toUpperCase()+e.target.value.slice(-1).toLowerCase();

						}

            }
          }}/>

					<CopyToClipboard
						text={this.state.seq_data[0].Sequence}>
						<button className="btn btn-outline-info">Copy ORF1p Seq</button>
					</CopyToClipboard>
					&nbsp;
					<CopyToClipboard
            text={this.state.seq_data2[0].Sequence}>
            <button className="btn btn-outline-info">Copy ORF2p Seq</button>
          </CopyToClipboard>
					&nbsp;
					<button className="btn btn-outline-info"
            onClick={e =>
              this.saveAs(">"+this.state.seq_data[0].Family+"\n"+this.state.seq_data[0].Sequence+"\n"+">"+this.state.seq_data2[0].Family+"\n"+this.state.seq_data2[0].Sequence)
            }
          >
            	Download {this.state.prot_seq} Data
          </button>



					<br/>
					<sup style={{"color":"black"}}>Do not append with ORF1p / ORF2p</sup>

					</div>
					<div className="container">
					<hr style={{borderColor:"black"}}/>
					</div>
				</div>
			<div className="white-background">

      <div id="sequence-viewer" className="container black_text"></div>
			<div className="container">
				<hr style={{borderColor:"black"}}/>
			</div>
			<br />
			<div id="sequence-viewer2" className="container black_text"></div>
			<div className="container">
				<hr style={{borderColor:"black"}}/>
			</div>
			<div className="container">
				<button className="btn btn-outline-info"
					onClick={e =>{
						this.setState({hs_pa: "HS"})
						fetch(this.props.urlSource+"/sequence/Hs")
						
						.then(response => response.json())
						.then(data => {
							var list_data = []

							for (var i = 0; i < data.length; i++) {
								list_data.push(">"+data[i].Family+"\n"+data[i].Sequence)
							}

							 this.saveAs2(list_data.join().replace(/,/g,"\n"))

					})
				}
				}
				>
					Download ALL HS
				</button>
				&nbsp;
				<button className="btn btn-outline-info"
					onClick={e =>{
						this.setState({hs_pa: "PA"})
						fetch(this.props.urlSource+"/sequence/Pa")
						
						.then(response => response.json())
						.then(data => {
							var list_data = []

							for (var i = 0; i < data.length; i++) {
								list_data.push(">"+data[i].Family+"\n"+data[i].Sequence)
							}

							 this.saveAs2(list_data.join().replace(/,/g,"\n"))

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
		</div>
		</div>
    );
  }
}

export default Sequence_view;
