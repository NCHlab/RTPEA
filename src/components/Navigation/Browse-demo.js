import React, { Component } from 'react';
import ReactTable from "react-table";
import rtpea_img from "../Logo/rtpea_img1.png"


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
    let url = "http://localhost:3001/table-demo/"
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
    accessor: (d) => d.sample.length
  }, {
    Header: 'Disease',
    accessor: 'disease'
  }, {
    Header: 'Tissue',
    id: "tiss",
    accessor: data => {var mylist=[]
                          for (var i in data.sample[0]){
                            if (i === "tissue_type"){
                              mylist.push([i])
                              console.log([i.key])
                            }


                        }

                          console.log(mylist)
                          return mylist
                        }

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
    id: "Sample_num",
    accessor: "Snumber"

                        // console.log(data.sample.length);
                        // data.sample[0][1][0].replicate
    }, {
    Header: 'Disease',
    accessor: 'disease'
  }, {
    Header: 'Tissue',
    accessor: "tissue_type"
    // id: "tiss_data",
    // accessor: data =>{
    //   // console.log(data.sample[0][1][0].tissue_type)
    //                     return data[1][0].tissue_type
    //                   }
    // accessor: 'sample[0].1[0].tissue_type'
  }, {
    Header: 'ORF1p',
    accessor: "ORF1p.confidence"
  }, {
    Header: 'ORF2p',
    id: "ORF_data",
    accessor: "ORF2p.confidence",
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
                  : row.value > 40 ? '#ffbf00'
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
  id:"ORF0_data",
  accessor: "ORF0.confidence",
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
                : row.value > 40 ? '#ffbf00'
                : '#ff2e00',
              borderRadius: '2px',
              transition: 'all .2s ease-out'
            }}
          >
            {row.value}
          </div>
      </div>
      )
  }, {
    Header: 'HERV-K',
    id:"HERVK_data",
    accessor: "HERV-K.confidence",
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
                  : row.value > 40 ? '#ffbf00'
                  : '#ff2e00',
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            >
              {row.value}
            </div>
        </div>
        )
  }, {
    Header: 'HERV-A',
    id:"HERVA_data",
    accessor: "HERV-A.confidence",
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
                  : row.value > 40 ? '#ffbf00'
                  : '#ff2e00',
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            >
              {row.value}
            </div>
        </div>
        )
  }, {
    Header: 'HERV-V',
    id:"HERVV_data",
    accessor: "HERV-V.confidence",
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
                  : row.value > 40 ? '#ffbf00'
                  : '#ff2e00',
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            >
              {row.value}
            </div>
        </div>
        )
  }]

// const LoadingMS =


const orf1p_column = [{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
},{
  Header: 'ORF1p Variants',
  accessor: 'name'
}, {
  Header: 'ORF1p Confidence',
  id: "ORF1p_var",
  accessor: 'confidence',
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
                : row.value > 40 ? '#ffbf00'
                : '#ff2e00',
              borderRadius: '2px',
              transition: 'all 1s ease-out'
            }}
          >
            {row.value}
          </div>
      </div>
      )
},{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
}]

const orf2p_column = [{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
},{
  Header: 'ORF2p Variants',
  accessor: 'name'
}, {
  Header: 'ORF2p Confidence',
  id: "ORF2p_var",
  accessor: 'confidence',
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
                : row.value > 40 ? '#ffbf00'
                : '#ff2e00',
              borderRadius: '2px',
              transition: 'all 1s ease-out'
            }}
          >
            {row.value}
          </div>
      </div>
      )
},{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
}]

// const tri_column = [{
//   Header: 'ORF1p Variant Name',
//   accessor: 'ORF1p_variants.name' // String-based value accessors!
// }, {
//   Header: 'ORF1p Confidence',
//   accessor: 'ORF1p_variants.confidence'
// },{
//   Header: 'ORF2p Variant Name',
//   accessor: 'ORF2p_variants.name' // String-based value accessors!
// }, {
//   Header: 'ORF2p Confidence',
//   accessor: 'ORF2p_variants.confidence'
// }]

      return (
        <div>

          <div className="background-body2 col-md-10 offset-md-1">


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
{/* 0, 83, 140 */}
            <ReactTable
              loading={this.state.table_loading}
              data={this.state.data2}
              columns={main_columns}
              noDataText="No Data Has been found, Please re-filter your search parameters."
              loadingText="Please Wait. Data is Loading....If no data is returned the API server may be down."
              defaultPageSize={10}
              showPaginationTop={true}
              className="-highlight"
              pageSizeOptions={[5, 10, 20, 25, 50, 100, 200]}
              filterable={true}
              minRows={0}
              SubComponent={row => {
                return (
                  <div style={{ border: "4px", borderStyle: "solid solid solid solid", borderColor: "rgb(1, 111, 186)" }}>
                    {/* {console.log(row.original.sample)} */}
                    <ReactTable
                      data={row.original.sample}
                      columns={sec_columns}
                      defaultPageSize={5}
                      showPagination={true}
                      minRows={0}
                      SubComponent={row => {
                        return (
                          <div>
                            <div style={{ border: "4px", borderStyle: "solid none solid none", borderColor: "rgb(5, 183, 112)" }}>
                              {/* {console.log(row.original)} */}
                              <ReactTable
                                data={row.original.ORF1p_variants}
                                columns={orf1p_column}
                                defaultPageSize={5}
                                showPageSizeOptions={false}
                                pageSizeOptions={[3, 5, 10, 20, 25, 50]}
                                showPagination={true}
                                showPaginationTop={true}
                                showPaginationBottom= {false}
                                minRows={0}
                                showPageJump={false}
                                className="-striped -highlight"/>
                            </div>
                            <div style={{ border: "4px", borderStyle: "none none solid none", borderColor: "rgb(5, 183, 112)" }}>
                              {/* {console.log(row.original)} */}
                              <ReactTable
                                data={row.original.ORF2p_variants}
                                columns={orf2p_column}
                                defaultPageSize={5}
                                showPageSizeOptions={false}
                                pageSizeOptions={[3, 5, 10, 20, 25, 50]}
                                showPagination={true}
                                minRows={0}
                                showPageJump={false}
                                className="-striped -highlight"/>
                                <img src={rtpea_img} height="auto" width="1400px" alt="logo"/>
                            </div>
                          </div>
                        );
                      }}
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
