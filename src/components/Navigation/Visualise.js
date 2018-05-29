import React, { Component } from "react";
import ProtVista from "ProtVista";
import 'ProtVista/style/main.css';

class Visualisation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: { name: "bob" }
		};

			// this.arrayOfMessageObjects = this.arrayOfMessageObjects.bind(this)
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
            uniprotacc: 'P05067'
        });
    }




	// instance = () => new ProtVista({
  //           el: "yourDiv",
  //           uniprotacc: 'P05067'
  //       });

	render() {
		return (
			<div className="background-body-vis">
				<div className="container">
					<div id="protvis">

					</div>
					{/* {JSON.stringify(this.instance())} */}
				</div>
			</div>
		);
	}
}

export default Visualisation;

// welcome = props => {
// 	return <h1>Hello, {props.name}</h1>;
// };
// <this.welcome name="Phase 1" />
// <this.welcome name="Phase 2" />
// <this.welcome name="Phase 3" />
//
// <div>
// 	<ul>{["first", "second", "third"].map(item => <li>{item}</li>)}</ul>
//
// 	<br />
// 	<br />

//
//
// class Visualisation extends Component{
//
// 	constructor() {
// 		super();
// 		this.state = {
// 			data: {name: "bob"}
// 		};
// 	}
//
// welcome = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// }
//
// render (){
// 	// const element = <Welcome name="Sara" />;
// 	return(
// 	<div>
// 		<h2>This is the Visualisation page</h2>
//
// 		{this.welcome(name="sara")}
// 	{/* {this.welcome()} */}
// 	</div>
// 	)
// }
// };
//
// export default Visualisation;
