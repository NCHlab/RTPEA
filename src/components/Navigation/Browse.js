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
          this.setState({ data2:data[0]});
          this.setState({error_msg: false})
          }
        })
    }

  // data = () => {[
  //   JSON.stringify(this.state.data2)
  // ]}




  render (){

    const data = [
      JSON.parse(JSON.stringify(this.state.data2))
  ]

  const columns = [{
    Header: 'DB ID',
    accessor: "_id" // String-based value accessors!
  }, {
    PXD: 'Age',
    accessor: 'PXD'
  }, {
    PXD: 'study',
    accessor: 'study'
  }, {
    PXD: 'disease',
    accessor: 'disease'
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
          {/* {this.state.data2.map((item) => {
            {item.PXD}
               })} */}

               {/* {this.state.data2} */}
               <br />
               {typeof JSON.parse(JSON.stringify(this.state.data2))}
               {console.log(this.state.data2[0])}
               {/* try to get the whole object into table */}



      <ReactTable
        data={data}
        columns={columns}

    />
    </div>
)
  }

}
export default Table;
