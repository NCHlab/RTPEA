import React, { Component } from "react";

class Visualisation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: { name: "bob" }
		};
	}

	// this.arrayOfMessageObjects = this.arrayOfMessageObjects.bind(this)

	welcome = props => {
		return <h1>Hello, {props.name}</h1>;
	};



	// arrayOfMessageObjects = () => {
	// 	[{
	// 		message: 'Tanner Linsley',
	// 		id: 26
	// 	},
	// 	{
	// 		message: 'boy Linsley',
	// 		id: 16,
	// }]
	// }

	render() {
		return (
			<div>
				<this.welcome name="Phase 1" />
				<this.welcome name="Phase 2" />
				<this.welcome name="Phase 3" />

				<div>
					<ul>{["first", "second", "third"].map(item => <li>{item}</li>)}</ul>

					<br />
					<br />

				</div>
			</div>
		);
	}
}

export default Visualisation;

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
