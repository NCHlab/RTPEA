import React, { Component } from 'react';

class Api extends Component{
  constructor(props){
    super(props)
    this.state = {
      data2: [],
      records: "tests"
    };
    this.returntext = this.returntext.bind(this)
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
        return results.json();})
        // .then((data)=>{
        //   console.log(data[0])
        //   this.setState({ data2:data[0][0]});
        // data.map((json_data) => {
        //   this.setState({ data2:[json_data]});
          return(

          <div>
            This is a test to see if it works
            {this.state.data2}
            {/* <ul>
              Quote: { data[0].map((name, _id, pxd_id, tissue_type, study, disease) => (
              <li key={_id}>
                {name}
                {_id}
                {pxd_id}
                {tissue_type}
                {study}
                {disease}
              </li>
              )) }

                <div>{data[0].map((item) => (<div>{item.text[0] + ' ' + item.text[1]}</div>))}</div>
            </ul> */}
          </div>
          )
        // })
      // console.log(this.state.data);
    // })
  }



    button_click = () => {
      fetch("http://localhost:3001/api/PXD002233")
        .then(response => response.json())
        .then(data => {
          console.log(data[0])
          this.setState({ data2:data[0]});
        })
        // })
    }

    returntext = () => {
      console.log("return text log")
      this.setState({records: "return text log"})
      // return(
      //   <div>
      //     {this.state.records}
      //   </div>
      // )
    }

render (){
    return (
    <div className="ma4 mt0">

        <button onClick={() => this.button_click()}>button_click</button>
        <button onClick={() => this.returntext()}>returntext</button>
        {this.state.records}
        <br />

        {/* <div>
          {this.state.data2.map((item) => (<div>{item.text[0] + ' ' + item.text[1]}</div>))}
        </div> */}
        {JSON.stringify(this.state.data2)}

        {/* {Object.keys(this.state.data2).map((item, i) => (
            <li className="travelcompany-input" key={i}>
                    <span className="input-label">key: {i} Name: {this.state.data2[item]}</span>
            </li>)
        )} */}


        {/* {this.state.data2} */}
        {/* {this.button_click()} */}
        {/* {this.myhit()} */}

      </div>

  );
}
}


export default Api;


// {/* <br/>
//     <button onClick={this.button_click}>button</button>
//     <br />
//
//     <button onClick={() => this.button_click()}>Click</button>
//     <br />
//     {/* https://stackoverflow.com/questions/46586656/reac/tjs-display-fetch-response-onclick
//     https://stackoverflow.com/questions/45141127/passing-and-displaying-array-of-objects-in-react-js
//     https://stackoverflow.com/questions/45700250/objects-are-not-valid-as-a-react-child-found-object-with-keys
//     https://stackoverflow.com/questions/41604539/objects-are-not-valid-as-a-react-child */}
//
//     {/* {this.state.data2} */} */}


// button_click = () => {
//   fetch("http://localhost:3001/api/PXD002212")
//     .then(response => response.json())
//     // .then((data)=>{
//     //   console.log(data[0])
//       return(
//         <div>
//           This is a test to see if it works
//           {/* {data[0]} */}
//         </div>
//       );
//     // })
// }
//
// myhit = () => {
//   return(
//     <div>
//       New type of text
//     </div>
//   )
// }
