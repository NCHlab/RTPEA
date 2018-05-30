import React, { Component } from "react";
import ProtVista from "ProtVista";
import 'ProtVista/style/main.css';

class Visualisation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uniprotacc: "P05067"
		};
	}

	componentDidMount = () => {
        // const script = document.createElement("script");
				//
        // script.src = "https://use.typekit.net/foobar.js";
        // script.async = true;
				//
        // document.body.appendChild(script);

				var yourDiv = document.getElementById('protvis');
        var instance = new ProtVista({
            el: yourDiv,
            uniprotacc: this.state.uniprotacc,
						// defaultSources: false
						exclusions: ['SEQUENCE_INFORMATION', 'STRUCTURAL', 'TOPOLOGY', 'MUTAGENESIS', 'MOLECULE_PROCESSING']
        });
    }

  button_click = (e) => {
		console.log(e)
		this.setState({ uniprotacc: e })
	}

	render() {
		return (
			<div className="background-body-vis">

				<div className="container">
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
