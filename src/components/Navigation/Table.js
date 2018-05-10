import React, { Component } from 'react';
import ReactTable from "react-table";


class Table extends Component{
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }



  render (){

    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    },{
      name: 'boy Linsley',
      age: 16,
      friend: {
        name: 'Jason croy',
        age: 32,
    }}
  ]

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]
      return (


    <ReactTable
      data={data}
      columns={columns}
    />
)
  }

}
export default Table;
