import React, { Component } from 'react';

class Api extends Component{
  constructor(props){
    super(props)
    this.state = {
      data2: [],
      records: ""
    };
  }

  componentDidMount = () => {
    // onMouseEnter(map1,0,this.handlestatechange)
   //  fetch('http://localhost:3001/api/PXD002211')
   // .then((response) => response.json())
   // .then((responseJson) => {
   //   return responseJson.pxd_id;
   // })
   // .catch((error) => {
   //   console.error(error);
   // });

   // fetch("http://localhost:3001/api/PXD002211")
   //   .then(response => response.json())
   //   .then((findresponse)=>{
   //   console.log(findresponse)
   //   this.setState({
   //     data:findresponse,
   //   })
   // })


    fetch("http://localhost:3001/api/PXD002211")
      .then(results => {
        return results.json();
      }).then((data)=>{
        let data2 = data.results.map((json_data) => {
          return(
            <div key={json_data.pxd_id}>
            </div>
          )
        })
      this.setState({ data2:data});
      console.log(this.state.data2);


    })

  }



    button_click = () => {
      fetch("http://localhost:3001/api/PXD002211")
        .then(response => response.json())
        .then(console.log())
    }

render (){
    return (
    <div className="ma4 mt0">
        <br/>
        <button onClick={this.button_click}>button</button>

        {this.state.data2}

      </div>

  );
}
}


export default Api;
