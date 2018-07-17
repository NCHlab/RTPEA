import React, { Component } from "react";
import Sequence from "sequence-viewer";

class Sequence_view extends Component {
	constructor(props) {
		super(props);
		this.state = {
			annotation_data: [{

	    }],
		};


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

			var seq1 = new Sequence('MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCNMALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCNMALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCNMALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCNMALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN');
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

  render() {
    return (
			<div className="background-body-vis">

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
