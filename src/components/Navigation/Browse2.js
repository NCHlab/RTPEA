import React, { Component } from 'react';
import ReactTable from "react-table";
import _ from "lodash";
import Switch from 'react-toggle-switch';
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css";

class Table extends Component{
  constructor() {
    super();
    this.state = {
      data2: [],
      url_id: "NULL",
      error_msg: false,
      table_loading: true,
      background_colour:"#edf1f4",
      text_colour:"#000000",
      high_conf_colour:"#85cc00",
      med_conf_colour:"#ffbf00",
      low_conf_colour:"#ff2e00",
      background_conf_colour:"#dadada",
      button_msg: "Darkify",
      switched: true,
      filtered1: window.location.href,
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

    changeColour = () =>{
          this.setState(prevState => {
          return {
            switched: !prevState.switched
          };
          });
          // this.setState({colour_dark: !this.state.color_black})
          if (this.state.background_colour === "#edf1f4"){
            this.setState({background_colour: "#5f6060"})
            this.setState({text_colour: "#ffffff"})
            this.setState({button_msg: "Brighten"})
            this.setState({high_conf_colour:"#6a9618"})
            this.setState({med_conf_colour:"#c47f0b"})
            this.setState({low_conf_colour:"#c12200"})
            this.setState({background_conf_colour:"#777f84"})
          } else if (this.state.background_colour !== "#edf1f4"){
            this.setState({background_colour: "#edf1f4"})
            this.setState({text_colour: "#000000"})
            this.setState({button_msg: "Darkify"})
            this.setState({high_conf_colour:"#85cc00"})
            this.setState({med_conf_colour:"#ffbf00"})
            this.setState({low_conf_colour:"#ff2e00"})
            this.setState({background_conf_colour:"#dadada"})

          }
      };

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
    Header: <h4><b>PXD</b></h4>,
    id: "data_pxd",
    accessor: (d) => d.PXD // String-based value accessors!
  }, {
    Header: <h4><b>STUDY</b></h4>,
    accessor: 'study'
  }, {
    Header: <h4><b>No. OF SAMPLES</b></h4>,
    id: "data_num",
    accessor: (d) => d.sample.length
  }, {
    Header: <h4><b>DISEASE</b></h4>,
    accessor: 'disease'
  }
  // }, {
  //   Header: 'Tissue',
  //   id: "tiss",
  //   accessor: data => {var mylist=[]
  //                         for (var i in data.sample[0]){
  //                           if (i === "tissue_type"){
  //                             mylist.push([i])
  //                             console.log([i.key])
  //                           }
  //
  //
  //                       }
  //
  //                         console.log(mylist)
  //                         return mylist
  //                       }
  //
  // }]
]
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
    // }, {
    // Header: 'Disease',
    // accessor: 'disease'
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
    id: "ORF1p_data",
    accessor: "ORF1p.confidence",
    Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: this.state.background_conf_colour,
              borderRadius: '2px'
            }}
          >
            {/* {row.value} */}
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 80 ? this.state.high_conf_colour
                  : row.value > 40 ? this.state.med_conf_colour
                  : this.state.low_conf_colour,
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            >
              {row.value !== 0 ? row.value : row.value + " (Pos. Variants)"}
            </div>
        </div>
        )
    }, {
    Header: 'ORF2p',
    id: "ORF2p_data",
    accessor: "ORF2p.confidence",
    aggregate: vals => _.sum(vals),
    // Aggregated: row => (
    Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: this.state.background_conf_colour,
              borderRadius: '2px'
            }}
          >
            {/* {row.value} */}
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 80 ? this.state.high_conf_colour
                  : row.value > 40 ? this.state.med_conf_colour
                  : this.state.low_conf_colour,
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            >
              {row.value !== 0 ? row.value : row.value + " (Pos. Variants)"}
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
              backgroundColor: this.state.background_conf_colour,
              borderRadius: '2px'
            }}
          >
            {/* {row.value} */}
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 80 ? this.state.high_conf_colour
                  : row.value > 40 ? this.state.med_conf_colour
                  : this.state.low_conf_colour,
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            >
              {row.value}
            </div>
        </div>
        )
  }, {
    Header: 'HERV',
    id:"HERV_data",
    accessor: "HERV.confidence",
    Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: this.state.background_conf_colour,
              borderRadius: '2px'
            }}
          >
            {/* {row.value} */}
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 80 ? this.state.high_conf_colour
                  : row.value > 40 ? this.state.med_conf_colour
                  : this.state.low_conf_colour,
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            >
              {row.value}
            </div>
        </div>
        )
  }, {
    Header: 'Top Expr. Variant',
    accessor: "TEV"
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
            backgroundColor: this.state.background_conf_colour,
            borderRadius: '2px'
          }}
        >
          {/* {row.value} */}
          <div
            style={{
              width: `${row.value}%`,
              height: '100%',
              backgroundColor: row.value > 80 ? this.state.high_conf_colour
                : row.value > 40 ? this.state.med_conf_colour
                : this.state.low_conf_colour,
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
            backgroundColor: this.state.background_conf_colour,
            borderRadius: '2px'
          }}
        >
          {/* {row.value} */}
          <div
            style={{
              width: `${row.value}%`,
              height: '100%',
              backgroundColor: row.value > 80 ? this.state.high_conf_colour
                : row.value > 40 ? this.state.med_conf_colour
                : this.state.low_conf_colour,
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
          {console.log(this.props)}
          <div className="col-md-10 offset-md-1" style={{backgroundColor: this.state.background_colour, color: this.state.text_colour}}>
            {/* <div style={{backgroundColor: this.state.background_colour, color: this.state.text_colour}}> */}

            {/* <button type="button" className="btn btn-default" onClick={() => this.changeColour()}>{this.state.button_msg}</button> */}
            <Switch onClick={this.changeColour} on={this.state.switched} className='switch-colour'/>
            <br/>
            <hr style={{borderColor:"black"}}/>
            If Search Function is not working: Click <a href="../browse">HERE</a>
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



{/* onFilteredChange={(filtered, column) => {
  this.setState({filtered1: filtered.value})
  console.log(filtered)

  }} */}
            <ReactTable
              loading={this.state.table_loading}
              data={this.state.data2}
              columns={main_columns}
              noDataText="No Data Has been found, Please re-filter your search parameters."
              loadingText="Please Wait. Data is Loading....If no data is returned the API server may be down."
              defaultPageSize={10}
              showPaginationTop={true}
              className="-striped -highlight"
              pageSizeOptions={[5, 10, 20, 25, 50, 100, 200]}
              filterable={true}
              filtered = {[{
                id: 'disease',
                value: this.props.match.params.id}]
              }

              minRows={0}
              getTdProps={(state, rowInfo, column, instance) => {
                 return {
                   onClick: (e, handleOriginal) => {
                     {/* console.log("It was in this column:", column); */}
                     const { expanded } = state;
                     const path = rowInfo.nestingPath[0];
                     const diff = { [path]: expanded[path] ? false : true };
                     {/* console.log(rowInfo) */}
                      if (handleOriginal) {
                        handleOriginal();
                      }
                     instance.setState({
                       expanded: {
                         ...expanded,
                         ...diff
                       }
                     });
                   }
                 };
               }
             }
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
                      getTdProps={(state, rowInfo, column, instance) => {
                         return {
                           onClick: (e, handleOriginal) => {
                             {/* console.log("It was in this column:", column); */}
                             const { expanded } = state;
                             const path = rowInfo.nestingPath[0];
                             const diff = { [path]: expanded[path] ? false : true };
                             {/* console.log(rowInfo) */}
                              if (handleOriginal) {
                                handleOriginal();
                              }
                             instance.setState({
                               expanded: {
                                 ...expanded,
                                 ...diff
                               }
                             });
                           }
                         };
                       }
                     }

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
                                getTdProps={(state, rowInfo, column, instance) => {
                                   return {
                                     onClick: (e, handleOriginal) => {
                                       {/* console.log("It was in this column:", column); */}
                                       console.log(rowInfo.original.name)
                                       console.log(rowInfo.original.confidence)
                                       if (rowInfo.original.name !== "NA"){
                                         window.location = "../visualise/" + rowInfo.original.name.slice(0,5)
                                       }
                                       {/* console.log(rowInfo) */}
                                        if (handleOriginal) {
                                          handleOriginal();
                                        }
                                     }
                                   };
                                 }
                               }
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
                                getTdProps={(state, rowInfo, column, instance) => {
                                   return {
                                     onClick: (e, handleOriginal) => {
                                       {/* console.log("It was in this column:", column); */}
                                       console.log(rowInfo.original.name)
                                       console.log(rowInfo.original.confidence)
                                       if (rowInfo.original.name === "ORF2p_HS_58"){
                                         window.location = "../visualise/test2"
                                       } else if (rowInfo.original.name === "ORF2p_HS_111"){
                                         window.location = "../visualise/"
                                       } else if (rowInfo.original.name !== "NA"){
                                         window.location = "../visualise/" + rowInfo.original.name.slice(0,5)
                                       }
                                       {/* console.log(rowInfo) */}
                                        if (handleOriginal) {
                                          handleOriginal();
                                        }
                                     }
                                   };
                                 }
                               }
                                showPageJump={false}
                                className="-striped -highlight"/>
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


{/* </div> */}
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
