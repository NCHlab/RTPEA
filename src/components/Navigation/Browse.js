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
  // accessor: "sample.0.1.0.file_name"
  // accessor: "0.sample[0].1[0].file_name"

  const mynum = 20

  const main_columns = [{
    Header: 'Data by Study',
  headerClassName: 'my-favorites-column-header-group',
  columns: [{
    Header: 'PXD',
    id: "data_pxd",
    accessor: (d) => d.PXD // String-based value accessors!
  }, {
    Header: 'Study',
    accessor: 'study'
  }, {
    Header: 'No. of Samples',
    id: "data_num",
    accessor: (d) => mynum
  }, {
    Header: 'Disease',
    accessor: 'disease'
  }, {
    Header: 'Tissue',
    accessor: 'sample[0].1[0].tissue_type'
  }]
  }]

  const sec_columns = [{
    Header: '',
    accessor: '-' // String-based value accessors!
  }, {
    Header: '',
    accessor: '-'
  }, {
    Header: 'Sample Number',
    accessor: 'sample[0].1[0].phenotype'
  }, {
    Header: 'Disease',
    accessor: 'disease'
  }, {
    Header: 'Tissue',
    accessor: 'sample[0].1[0].tissue_type'
  }]


      return (
        <div>
          <br/>
          <br/>
          <div className="background-body2">


            <br />

            <ReactTable
              loading={false}
              data={this.state.data2}
              columns={main_columns}
              noDataText="No Data Has been found, the API server may be down. Please contact the Developers."
              defaultPageSize={20}
              showPaginationTop={true}
              className="-striped -highlight"
              pageSizeOptions={[5, 10, 20, 25, 50, 100, 200]}
              SubComponent={row => {
                return (
                    <ReactTable
                      data={this.state.data2}
                      columns={sec_columns}
                      defaultPageSize={3}
                      showPagination={false}/>
                    );
                  }}
                />





          </div>
        </div>
)
  }

}
export default Table;

// {/* {JSON.stringify(this.state.data2)} */}
//
// {/* {this.state.data2.map((item) => {
//   {item.PXD}
//      })} */}
//
// {/* {typeof this.state.data2}
// {console.log(this.state.data2[0])} */}
// {/* try to get the whole object into table */}
//
// {/* data={json_data} */}
// {/* resolveData={json_data.map(data => data)} */}
// {/* resolveData={json_data.map(data => data.PXD)} */}
