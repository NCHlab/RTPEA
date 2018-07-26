import React, { Component } from 'react';
import ReactTable from "react-table";
import _ from "lodash";
import Switch from 'react-toggle-switch';
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css";
import Popup from "reactjs-popup";
import highconf from "../Images/highconf.png";
import medconf from "../Images/medconf.png";
import lowconf from "../Images/lowconf.png";

class Table extends Component{
  constructor() {
    super();
    this.state = {
      data2: [],
      url_id: "NULL",
      error_msg: false,
      table_loading: true,
      // background_colour:"#edf1f4",
      background_colour:"linear-gradient(to bottom, #9cb7e2, #bfd2ef)",
      text_colour:"#000000",
      high_conf_colour:"#85cc00",
      med_conf_colour:"#ffbf00",
      low_conf_colour:"#ff2e00",
      background_conf_colour:"#dadada",
      button_msg: "Darkify",
      switched: true,
      filtered1: "",
    };
    this.check_expr_orf2 = this.check_expr_orf2.bind(this)
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
          if (this.state.background_colour === "linear-gradient(to bottom, #9cb7e2, #bfd2ef)"){
            this.setState({background_colour: "#444444"})
            this.setState({text_colour: "#ffffff"})
            this.setState({button_msg: "Brighten"})
            this.setState({high_conf_colour:"#6a9618"})
            this.setState({med_conf_colour:"#c47f0b"})
            this.setState({low_conf_colour:"#c12200"})
            this.setState({background_conf_colour:"#777f84"})
          } else if (this.state.background_colour !== "linear-gradient(to bottom, #9cb7e2, #bfd2ef)"){
            this.setState({background_colour: "linear-gradient(to bottom, #9cb7e2, #bfd2ef)"})
            this.setState({text_colour: "#000000"})
            this.setState({button_msg: "Darkify"})
            this.setState({high_conf_colour:"#85cc00"})
            this.setState({med_conf_colour:"#ffbf00"})
            this.setState({low_conf_colour:"#ff2e00"})
            this.setState({background_conf_colour:"#dadada"})

          }
      };

check_expr_orf2 = (d) => {

      var prevconf = 2
      console.log(d.ORF2p.confidence)
    //   for (var i = 0; i < d.length; i++) {
    //
    //     for (var j = 0; j < d[i].ORF2p_variants.length; j++) {
    //
    //         if (d[i].ORF2p_variants[j].confidence > prevconf){
    //           prevconf = d[i].ORF2p_variants[j].confidence
    //         }
    //     }
    // }
    return prevconf

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
  },
  {
    Header: <b>Sample Number</b>,
    id: "Sample_num",
    accessor: "Snumber"

                        // console.log(data.sample.length);
                        // data.sample[0][1][0].replicate
    // }, {
    // Header: 'Disease',
    // accessor: 'disease'
  }, {
    Header: <b>Tissue</b>,
    accessor: "tissue_type"
    // id: "tiss_data",
    // accessor: data =>{
    //   // console.log(data.sample[0][1][0].tissue_type)
    //                     return data[1][0].tissue_type
    //                   }
    // accessor: 'sample[0].1[0].tissue_type'
  }, {
    Header: <b>ORF1p</b>,
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
    Header: <b>ORF2p</b>,
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
  // , {
  //   Header: <b>ORF0</b>,
  //   id:"ORF0_data",
  //   accessor: "ORF0.confidence",
  //   Cell: row => (
  //         <div
  //           style={{
  //             width: '100%',
  //             height: '100%',
  //             backgroundColor: this.state.background_conf_colour,
  //             borderRadius: '2px'
  //           }}
  //         >
  //           {/* {row.value} */}
  //           <div
  //             style={{
  //               width: `${row.value}%`,
  //               height: '100%',
  //               backgroundColor: row.value > 80 ? this.state.high_conf_colour
  //                 : row.value > 40 ? this.state.med_conf_colour
  //                 : this.state.low_conf_colour,
  //               borderRadius: '2px',
  //               transition: 'all .2s ease-out'
  //             }}
  //           >
  //             {row.value}
  //           </div>
  //       </div>
  //       )
  // }
  , {
    Header: <b>HERV</b>,
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
    Header: <b>Top Expr. Var. ORF1</b>,
    id: "top_expr_orf1",
    accessor: (d) => {
      var all_list1 = []
      all_list1.push(d.ORF1p_variants[0].confidence)
      all_list1.sort(function(a, b){return b - a});
      return all_list1[0]
      // this.check_expr_orf2(d)

    },
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
              {/* {console.log(row)} */}
              {/* {row.value} <b> {row.original.ORF1p_variants[0].name}</b> */}
              {row.value} <span style={{fontSize: "10px"}}> {row.original.ORF1p_variants[0].name}</span>
            </div>
        </div>
        )
  }, {
    Header: <b>Top Expr. Var. ORF2</b>,
    id: "top_expr_orf2",
    accessor: (d) => {
      //Only looking at [0] because data already ordered highest to lowest
      // console.log(d.ORF2p_variants)
      // console.log(d.ORF2p_variants[0].confidence)
      // console.log(d.ORF2p_variants[1].confidence)
    //   for (var i = 0; i < 109; i++) {
    //   console.log(d.ORF2p_variants[i].confidence)
    // }


      // console.log(d)s
      var all_list2 = []
      all_list2.push(d.ORF2p_variants[0].confidence)
      all_list2.sort(function(a, b){return b - a});
      return all_list2[0]
      // this.check_expr_orf2(d)

    },
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
              {/* {row.value} */}
              {/* {row.value + " - " + row.original.ORF2p_variants[0].name} */}
              {row.value} <span style={{fontSize: "10px"}}> {row.original.ORF2p_variants[0].name}</span>
            </div>
        </div>
        )
  }]


//   Header: <b>Top Expr. Variant</b>,
//   id: "top_expr_orf1",
//   accessor: (d) => {
//     var prevconf = 2
//     for (var i = 0; i < d.length; i++) {
//       for (var j = 0; j < d[i].ORF2p_variants.length; j++) {
//           if (d[i].ORF2p_variants[j].confidence > prevconf){
//             prevconf = d[i].ORF2p_variants[j].confidence
//           }
//       }
//   }
//   return prevconf
// }
// }]

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
  Header: <b>ORF1p Variants</b>,
  accessor: 'name'
}, {
  Header: <b>ORF1p Confidence</b>,
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
  Header: <b>ORF2p Variants</b>,
  accessor: 'name'
}, {
  Header: <b>ORF2p Confidence</b>,
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

          {console.log(this.state.data2)}

          <div className="col-md-10 offset-md-1" style={{background: this.state.background_colour, color: this.state.text_colour}}>
            {/* <div className="col-md-10 offset-md-1" style={{background: 'linear-gradient(to bottom, #d9e0e2, #abadad)', color: this.state.text_colour}}> */}

            {/* <div style={{backgroundColor: this.state.background_colour, color: this.state.text_colour}}> */}

            {/* <button type="button" className="btn btn-default" onClick={() => this.changeColour()}>{this.state.button_msg}</button> */}
            <Switch onClick={this.changeColour} on={this.state.switched} className='switch-colour'/>
            <br/>
            <button style={{float:"right", display: "inline"}} className="btn btn-outline-danger" onClick={() => window.location = "/browse"}> Refresh Search </button>

            <div className="" style={{color:"black"}}>
              <Popup trigger={<button className="btn btn-outline-primary"> Information! </button>} modal>
                {close => (
                  <div className="">
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                    <div className="header"> Using the Table </div>
                    <div className="content">
                      {/* {" "} */}
                      Use your mouse! If you see it, you can probably click it
                      <br />
                      <div className="header"></div>
                      Legend:
                      <br />
                      <img src={highconf} alt="Online!" /> = High confidence
                      <br />
                      <img src={medconf} alt="Online!" /> = Med confidence
                      <br />
                      <img src={lowconf} alt="Online!" /> = Low Confidence
                      <div className="header"></div>
                      <br />
                      If Search Breaks; Refresh the page or click the <a href="/browse">Link</a> - Make sure to clear all search boxes if data not showing
                      <br />
                      The Table displays data by PXD (by default) which is a dataset identifier set by the PRIDE Database team
                      <br />
                      The first section of the table displays the sample number, along with and ORF1/2 Identifications
                      <br />
                      The sub-table for the samples display the variants that may occur
                    </div>
                  </div>
                )}
              </Popup>
              </div>


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

{/* filtered = {[{
  id: 'disease',
  value: this.state.filtered1}]
} */}

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
              showPaginationTop={false}
              className="-striped -highlight"
              pageSizeOptions={[5, 10, 20, 25, 50, 100, 200]}
              filterable={true}


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
                  <div style={{ border: "4px", borderStyle: "solid solid solid solid", borderColor: "rgb(186, 0, 0)" }}>
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
                            <div style={{ border: "4px", borderStyle: "solid solid none solid", borderColor: "rgb(214, 188, 0)" }}>
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
                                         window.location = "visualise/" + rowInfo.original.name.slice(0,5)
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
                            <div style={{ border: "4px", borderStyle: "none solid solid solid", borderColor: "rgb(214, 188, 0)" }}>
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
                                         window.location = "visualise/test2"
                                       } else if (rowInfo.original.name === "ORF2p_HS_111"){
                                         window.location = "visualise/"
                                       } else if (rowInfo.original.name !== "NA"){
                                         window.location = "visualise/" + rowInfo.original.name.slice(0,5)
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
