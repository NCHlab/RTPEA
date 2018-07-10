import React, { Component } from "react";
import Ideogram from "ideogram";

class Ideogram_c extends Component {
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
		// 	var annotationTracks = [
    //   {id: 'pathogenicTrack', displayName: 'Pathogenic', color: '#F00', shape: "traingle"},
    //   {id: 'uncertainSignificanceTrack', displayName: 'Uncertain significance', color: '#CCC', shape: "traingle"},
    //   {id: 'benignTrack',  displayName: 'Benign', color: '#8D4', shape: "traingle"}
    // ];

			fetch("http://localhost:3001/ideogram")
			.then(response => response.json())
			.then(data => {this.setState({annotation_data: data})})
			.then( data => {
    return new Ideogram({
      organism: 'human',
      dataDir: 'https://unpkg.com/ideogram@0.13.0/dist/data/bands/native/',
			annotations: this.state.annotation_data,
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
			<div>
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
