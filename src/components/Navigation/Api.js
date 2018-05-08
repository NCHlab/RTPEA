import React, { Component } from 'react';
import JSONPretty from 'react-json-pretty';
import "./Api.css";

class Api extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      data2: String,
      records: "This state has not been set",
      url_id: "NULL",
      data_text: "Data for "
    };
    // This binding is necessary to make `this` work in the callback
    this.returntext = this.returntext.bind(this)
    this.button_click = this.button_click.bind(this)
  }
  componentDidMount = () => {

    this.setState({isLoading: false})
    // fetch("http://localhost:3001/api/PXD002211")
    //   .then(results => {
    //     return results.json();})
  }

  searchURL = () => {
    let { url_id } = this.state;
    let url = "http://localhost:3001/api/" + url_id
    return url
  }

    button_click = () => {
      fetch(this.searchURL())
      // "http://localhost:3001/api/PXD002233"
        .then(response => response.json())
        .then(data => {
          if (data.includes("No ID found in database for")){
            console.log(data)
            this.setState({ data2:data});
          } else {
          console.log(data[0])
          this.setState({ data2:data[0]});
          }
        })
    }

    returntext = () => {
      console.log("Example State has now been set via this button")
      if (this.state.records === "Example State has now been set" ){
        this.setState({records: "Example State has been reverted"})
      } else {
      this.setState({records: "Example State has now been set"})
      }
    }

render (){
    return (

    <div className="ma4 mt0 background-body3-noalign container">
        {this.state.isLoading ? console.log("yes") : console.log("no")}
        {this.state.isLoading}

        <br />


        <input placeholder="search" onChange={(e) => this.setState({ url_id: e.target.value.toUpperCase() })} />
        <button onClick={this.button_click}>Search API</button>

        <br />
        <br />

        <button onClick={this.returntext}>returntext</button>
        {this.state.records}

        <br />

        <div className="background-body3 ">

            Data for: {this.state.url_id}

          <JSONPretty style={{fontSize: "1.1em"}} id="json-pretty" json={JSON.stringify(this.state.data2)}></JSONPretty>

        </div>




    </div>

  );
}
}


export default Api;


{/* <button onClick={() => this.button_click()}>Search API</button> */}
