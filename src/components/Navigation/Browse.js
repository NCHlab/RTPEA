import React, { Component } from 'react';
import ReactTable from "react-table";


class Table extends Component{
  constructor() {
    super();
    this.state = {
      data2: [],
      url_id: "NULL",
      error_msg: false
    };
    // this.data = this.data.bind(this)
  }



  searchURL = () => {
    let { url_id } = this.state;
    let url = "http://localhost:3001/table/"
    return url
  }

    componentDidMount = () => {
      fetch(this.searchURL())
      // "http://localhost:3001/api/PXD002233"
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty("Status")){
            console.log(data)
            this.setState({ data2:data});
            this.setState({error_msg: true})
          } else {
          // console.log(data[0])
          this.setState({ data2:data});
          this.setState({error_msg: false})
          }
        })
    }

  // data = () => {[
  //   JSON.stringify(this.state.data2)
  // ]}




  render (){

    const json_data = [this.state.data2]


  // accessor: "sample.0.1.0.file_name"
  // accessor: "0.sample[0].1[0].file_name"

  const columns = [{
    Header: 'DB ID',
    id: "data_id",
    accessor: '_id' // String-based value accessors!
  }, {
    Header: 'PXD',
    id: "data_pxd",
    accessor: (d) => d.PXD
  }, {
    Header: 'study',
    accessor: 'study'
  }, {
    Header: 'disease',
    accessor: 'disease'
  // ,{
  //   id: 'data_sample',
  //   Header: 'sample',
  //   accessor: data.map(function(data){
  //     return data.sample
  //   })
    // "sample.0.1.0.file_name"
  }]
    // const columns = [{
    //   Header: 'ID',
    //   accessor: 'name' // String-based value accessors!
    // }, {
    //   Header: 'Study',
    //   accessor: 'age'
    // }, {
    //   id: 'friendName', // Required because our accessor is not a string
    //   Header: 'Friend Name',
    //   accessor: 'name' // Custom value accessors!
    // }, {
    //   Header: "test", // Custom header components!
    //   accessor: 'friend.age'
    // }]


    // const columns = [{
    //   Header: 'Name',
    //   accessor: 'name' // String-based value accessors!
    // }, {
    //   Header: 'Age',
    //   accessor: 'age',
    //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // }, {
    //   id: 'friendName', // Required because our accessor is not a string
    //   Header: 'Friend Name',
    //   accessor: d => d.friend.name // Custom value accessors!
    // }, {
    //   Header: props => <span>Friend Age</span>, // Custom header components!
    //   accessor: 'friend.age'
    // }]


      return (
        <div>
          <br/>
          <br/>
          {JSON.stringify(this.state.data2)}
        <div className="background-body2">
          {/* {this.state.data2.map((item) => {
            {item.PXD}
               })} */}

               {/* {this.state.data2} */}
               <br />
               {typeof this.state.data2}
               {console.log(this.state.data2[0])}
               {/* try to get the whole object into table */}

{/* data={json_data} */}
  {/* resolveData={json_data.map(data => data)} */}

      <ReactTable
        data={this.state.data2}
        resolveData={json_data.map(data => data.PXD)}
        columns={columns}
      />

    </div>
  </div>
)
  }

}
export default Table;
