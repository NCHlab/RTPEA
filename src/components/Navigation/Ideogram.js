import React, { Component } from "react";
import Ideogram from "ideogram";

class Ideogram_c extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prot_seq: this.props.match.params.id,
			annotation_data: [{

	    }],
			annotationTracks:[
      {id: 'pathogenicTrack', displayName: 'Pathogenic', color: '#F00', shape: "Triangle"},
      {id: 'uncertainSignificanceTrack', displayName: 'Uncertain significance', color: '#CCC', shape: "Triangle"},
      {id: 'benignTrack',  displayName: 'Benign', color: '#8D4', shape: "Triangle"}],

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

		function 	hyperlinkProtein(annot) {
    // var term = '(' + annot.name + '[gene])+AND+(Homo+sapiens[orgn])';
    var url = 'https://www.uniprot.org/uniprot/?query=' + annot.name.substring(0,6) + '&sort=score';
    annot.displayName =
      '<a target="_blank" href="' + url + '">' + annot.name + '</a>';
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

  render() {
    return (
			<div className="background-body-vis">
				<div className="text-center">
					<h1>Chromosome Centric Mapper</h1>

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
