import React, { Component } from 'react';
import ReactTable from "react-table";


class Table extends Component{
  constructor() {
    super();
    this.state = {
      data2: [],
      url_id: "NULL",
      error_msg: false,
      table_loading: true
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
            this.setState({table_loading: false})
          } else {
          // console.log(data[0])
          this.setState({ data2:data});
          this.setState({error_msg: false})
          this.setState({table_loading: false})
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
    accessor: '-'
  }, {
    Header: 'Disease',
    accessor: '-'
  }, {
    Header: 'Tissue',
    id: "num2",
    accessor: (d) => mynum
  }]


      return (
        <div>
          <br/>
          <br/>
          <div className="background-body2">


            <br />

            {/* getTdProps={(state, rowInfo, column, instance) => {
          return {
            onMouseEnter: e =>
              console.log("Cell - onMouseEnter", {
                state,
                rowInfo,
                column,
                instance,
                event: e
              })
          };
        }} */}

            <ReactTable
              loading={this.state.table_loading}
              data={this.state.data2}
              columns={main_columns}
              noDataText="No Data Has been found, the API server may be down. Please contact the Developers."
              loadingText="Please Wait. Data is Loading...."
              defaultPageSize={5}
              showPaginationTop={true}
              className="-striped -highlight"
              pageSizeOptions={[5, 10, 20, 25, 50, 100, 200]}
              SubComponent={row => {
                return (
                  <div style={{ border: "4px", borderStyle: "dotted solid solid solid", borderColor: "rgb(0, 83, 140)" }}>
                    {console.log(row)}
                    <ReactTable
                      data={this.row}
                      columns={sec_columns}
                      defaultPageSize={3}
                      showPagination={false}
                      />
                    </div>
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
