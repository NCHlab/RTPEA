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
  const blank_data = "-"

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
  // }, {
  //   Header: 'ORF1p',
  //   accessor: "-"
  // }, {
  //   Header: 'ORF2p',
  //   accessor: "-"
  // }, {
  //   Header: 'ORF0',
  //   accessor: "-"
  // }, {
  //   Header: 'HERV-K',
  //   accessor: "-"
  // }, {
  //   Header: 'HERV-A',
  //   accessor: "-"
  // }, {
  //   Header: 'HERV-V',
  //   accessor: "-"
  }]
  }]
  var mylist = [{"1":2,"2":2,"3":3}]


//   Header: 'Sample Number',
//   id: "Sample_num",
//   accessor: data => {var mylist=[]
//                       for (var i in data.sample[0]){
//                       mylist.push([i])
//                       console.log([i])
//
//                     }
//
//                       console.log(mylist)
//                       return mylist
//                     }
//                     // console.log(data.sample.length);
//                     // data.sample[0][1][0].replicate
// }, {

// You would need to materialize 2 separate rows
// You would have to create an additional row in your array for each item
// You cannot materialize additional rows from within a column accessor
// This is more of a javascript question
// You would just need to make a new item in the array you pass in
// for each additional row you want to display

  const sec_columns = [{
    Header: '',
    accessor: '-' // String-based value accessors!
  }, {
    Header: '',
    accessor: '-'
  }, {
    Header: 'Sample Number',
    id: "Sample_num",
      accessor: data => {var mylist=[]
                          for (var i in data.sample[0]){
                          mylist.push(i)
                          // console.log(i)

                        }

                          // console.log(mylist)
                          return mylist
                        }
                        // console.log(data.sample.length);
                        // data.sample[0][1][0].replicate
    }, {
    Header: 'Disease',
    accessor: 'disease'
  }, {
    Header: 'Tissue',
    id: "tiss_data",
    accessor: data =>{
      // console.log(data.sample[0][1][0].tissue_type)
                        return data.sample[0][1][0].tissue_type
                      }
    // accessor: 'sample[0].1[0].tissue_type'
  }, {
    Header: 'ORF1p',
    accessor: "sample[0].1[0].ORF1p.confidence"
  }, {
    Header: 'ORF2p',
    id: "ORF_data",
    accessor: "sample[0].1[0].ORF2p.confidence",
    Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#dadada',
              borderRadius: '2px'
            }}
          >
            {/* {row.value} */}
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 80 ? '#85cc00'
                  : row.value > 20 ? '#ffbf00'
                  : '#ff2e00',
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            >
              {row.value}
            </div>




        </div>
        )
    }
    // "sample[0].1[0].ORF1p.confidence" && "sample[0].1[0].ORF2p.confidence"
  , {
    Header: 'ORF0',
    accessor: "sample[0].1[0].ORF0.confidence"
  }, {
    Header: 'HERV-K',
    accessor: "sample[0].1[0].HERV-K.confidence"
  }, {
    Header: 'HERV-A',
    accessor: "sample[0].1[0].HERV-A.confidence"
  }, {
    Header: 'HERV-V',
    accessor: "sample[0].1[0].HERV-V.confidence"
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
        {/* pivotBy={["Sample_num", "ORF_data"]} */}
{/* pivotBy={["disease"]} */}
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
                    {console.log(row.original)}
                    <ReactTable
                      data={[row.original]}

                      columns={sec_columns}
                      defaultPageSize={3}
                      showPagination={false}
                      />
                    </div>
                    );
                  }}
                />
  {/* resolveData={data => data.map(row => row)} */}
{/* data={row.row._original[0]} */}



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
