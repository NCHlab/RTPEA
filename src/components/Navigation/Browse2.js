import React, { Component } from 'react';
import ReactTable from "react-table";
import _ from "lodash";
import Switch from 'react-toggle-switch';
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css";
import Popup from "reactjs-popup";
import highconf from "../Images/highconf.png";
import medconf from "../Images/medconf.png";
import lowconf from "../Images/lowconf.png";
import matchSorter from 'match-sorter';

class Table extends Component{
  constructor() {
    super();
    this.state = {
      data2: [],
      url_id: "NULL",
      error_msg: false,
      table_loading: true,
      background_colour:"linear-gradient(to bottom, #9cb7e2, #bfd2ef)",
      text_colour:"#000000",
      high_conf_colour:"#85cc00",
      med_conf_colour:"#ffbf00",
      low_conf_colour:"#ff2e00",
      background_conf_colour:"#dadada",
      button_msg: "Darkify",
      switched: true,
      filtered1: [],
      filtered2: [],
      filtered3: [],
      filtered4: [],
      filtered5: window.location.pathname.slice(8)
    };
  }



  searchURL = () => {
    let url = this.props.urlSource+"/table/"
    return url
  }

    componentDidMount = () => {
      fetch(this.searchURL())
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty("Status")){
            console.log(data)
            this.setState({ data2:data});
            this.setState({error_msg: true})
            this.setState({table_loading: false})
          } else {
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


  render (){

  const main_columns = [{
    Header: 'Data by Study',
  headerClassName: 'my-favorites-column-header-group',
  columns: [{
    Header: <h4><b>PXD</b></h4>,
    id: "data_pxd",
    accessor: (d) => d.PXD, // String-based value accessors!
    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["data_pxd"],threshold: matchSorter.rankings.CONTAINS  }),
                  filterAll: true,
    Cell: row => ( <a href={"https://www.ebi.ac.uk/pride/archive/projects/"+row.original.PXD} target="_blank" style={{color:'black'}}><u>{row.original.PXD}</u></a> )
  }, {
    Header: <h4><b>STUDY</b></h4>,
    id: "study",
    accessor: 'study',
    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["study"],threshold: matchSorter.rankings.CONTAINS  }),
                  filterAll: true
  }, {
    Header: <h4><b>No. OF SAMPLES</b></h4>,
    id: "data_num",
    accessor: (d) => d.sample.length
  }, {
    Header: <h4><b>DISEASE</b></h4>,
    accessor: 'disease',
    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["disease"],threshold: matchSorter.rankings.CONTAINS  }),
                  filterAll: true
  }, {
    Header: <h4><b>Organ</b></h4>,
    accessor: 'organ',
    width: 100,
    filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["organ"],threshold: matchSorter.rankings.CONTAINS }),
                  filterAll: true,
    show: true,
  }
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
  }, {
    Header: <b>Tissue</b>,
    accessor: "tissue_type"
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
    Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: this.state.background_conf_colour,
              borderRadius: '2px'
            }}
          >
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
              {row.value} &emsp;-&emsp; <span style={{fontSize: "11px"}}> {row.original.ORF1p_variants[0].name === "NA" ? row.original.ORF1p_variants[0].name : row.original.ORF1p_variants[0].name.slice(6) }</span>
            </div>
        </div>
        )
  }, {
    Header: <b>Top Expr. Var. ORF2</b>,
    id: "top_expr_orf2",
    accessor: (d) => {

      var all_list2 = []
      all_list2.push(d.ORF2p_variants[0].confidence)
      all_list2.sort(function(a, b){return b - a});
      return all_list2[0]

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
              {row.value} &emsp;-&emsp; <span style={{fontSize: "11px"}}> {row.original.ORF2p_variants[0].name === "NA" ? row.original.ORF2p_variants[0].name : row.original.ORF2p_variants[0].name.slice(6) }</span>

            </div>
        </div>
        )
  }]


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
  id: "ORF1p_var_name",
  accessor: 'name',
  Cell: row => ( row.original.name !== "NA"?
      <div className="browse-var-style" style={{height:22}}>
         {row.value}
      </div>:
      <div>
        {row.value}
      </div>
  )
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
      Header: 'Sequence',
      accessor: '-',
      Cell: row => row.original.name !== "NA"?
        (
          <div>
            <a className="browse-link-style" target="_blank" href={this.props.urlSource2+"/sequence/"+row.original.name.slice(6)}>{row.original.name.slice(6)} Sequence</a>
          </div>
        ) : ""
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
  id: "ORF2p_var_name",
  accessor: 'name',
  Cell: row => ( row.original.name !== "NA"?
      <div className="browse-var-style" style={{height:22}}>
         {row.value}
      </div>:
      <div>
        {row.value}
      </div>
  )
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
      Header: 'Sequence',
      accessor: '-',
      Cell: row => row.original.name !== "NA"?
        (
          <div>
            <a className="browse-link-style" target="_blank" href={this.props.urlSource2+"/sequence/"+row.original.name.slice(6)}>{row.original.name.slice(6)} Sequence</a>
          </div>
        ) : ""
    },{
  Header: '',
  accessor: '-'
},{
  Header: '',
  accessor: '-'
}]


      return (
        <div>

          <div className="col-md-10 offset-md-1" style={{background: this.state.background_colour, color: this.state.text_colour}}>

            <Switch onClick={this.changeColour} on={this.state.switched} className='switch-colour'/>
            <br/>
            <button style={{float:"right", display: "inline"}} className="btn btn-danger" onClick={() => window.location = "../browse"}> Refresh Search </button>

              <div className="" style={{color:"black"}}>
                <Popup trigger={<button className="btn btn-primary"> Information! </button>} modal>
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
                        <br />
                        {"The NUMBER represents the confidence score calculated by PeptideShaker. This number ranges between 0 to 100 (highest) and indicates how confident we are that this protein is expressed in the given sample. The rate of false positive results is less than 1 in 1000 (FDR < 0.01)."}

                        <div className="header"></div>

                        <br />
                      If Search Breaks; Refresh the page or click the <a href="/browse">Link</a> - Make sure to clear all search boxes if data not showing
                      <br />
                      <br />
                      The Table displays data by PXD (by default) which is a dataset identifier set by PRIDE (ProteomeExchange consortium)
                      <br />
                      The first section of the table displays the sample number, along with and ORF1/2p Identifications
                      <br />
                      The sub-table for the samples display the variants that may occur
                      <br />
                      <br />

                      The table can be sorted by any column header simply by clicking on it
                      <br />
                      <br />

                      We have given different variants of the same family a different name by simply adding an underscore followed by a number. (e.g: ORF1p_HS_10). The last number has no biological meaning.
                      <br />
                      <br />
                      There could be protein results by three LINE-1 protein families: HS, PA2 and PA3.
                      <br />
                      And 3 different proteins by HERVs (the gag, pol and env groups)
                      </div>
                    </div>
                  )}
                </Popup>

                <select className="form-control" id="organ_dropdown" style={{width:'150px'}} defaultValue={this.state.filtered5} onChange={e => this.setState({filtered5: e.target.value})}>
                  <option value="brain">Brain</option>
                  <option value="breast">Breast</option>
                  <option value="heart">Heart</option>
                  <option value="intestine">Intestine</option>
                  <option value="kidney">Kidney</option>
                  <option value="liver">Liver</option>
                  <option value="lung">Lung</option>
                  <option value="pancreas">Pancreas</option>
                  <option value="testes">Testes</option>
                  <option value="uterus">Uterus</option>
                  <option value="meta_missing">Meta_missing</option>
                </select>
                </div>

              

            <br />

            <ReactTable
              loading={this.state.table_loading}
              data={this.state.data2}
              columns={main_columns}
              noDataText="No Data Has been found, Please re-filter your search parameters."
              loadingText="Please Wait. Data is Loading....If no data is returned the API server may be down."
              defaultPageSize={25}
              showPaginationTop={false}
              className="-striped -highlight"
              pageSizeOptions={[5, 10, 20, 25, 50, 100, 200]}
              filterable={true}
              filtered = {[
                {id: 'organ',
                value: this.state.filtered5},
                {id: 'disease',
                value: this.state.filtered4},
                {id: 'data_num',
                value: this.state.filtered3},
                {id: 'data_pxd',
                value: this.state.filtered1},
                {id: 'study',
                value: this.state.filtered2}]
              }
              onFilteredChange={(filtered, column, e) => {

                if (column.id == "study"){
                  this.setState({ filtered2:e });
                } else if (column.id == "disease") {
                this.setState({ filtered4:e });
              } else if (column.id == "data_num") {
                this.setState({ filtered3:e });
              } else if (column.id == "data_pxd") {
                this.setState({ filtered1:e });
              } else if (column.id == "organ") {
                this.setState({ filtered5:e });
                }
              }
              }

              minRows={0}
              getTdProps={(state, rowInfo, column, instance) => {
                 return {
                   onClick: (e, handleOriginal) => {

                     const { expanded } = state;
                     const path = rowInfo.nestingPath[0];
                     const diff = { [path]: expanded[path] ? false : true };

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
                   <ReactTable
                     data={row.original.sample}
                     columns={sec_columns}
                     defaultPageSize={300}
                     showPagination={true}
                     showPageJump={false}
                     defaultSortDesc={true}
                     pageSizeOptions={[5, 10, 20, 25, 50, 100, 200, 300]}
                     minRows={0}
                     getTbodyProps={ (state, rowInfo, column, rtInstance) => {
                       console.log(state)
                       if (state.pageSize >10 && state.pageSize < 300) {
                         return {
                           style: {
                             height: "auto"
                           }
                         }
                       }
                       else {
                       return {
                         style: {
                           height: state.pageRows.length > 9 ? "400px" : "auto"
                         }
                       }
                       }
                     }}
                     getPaginationProps={(state, rowInfo, column, rtInstance) => {
                       return {
                         style: {
                           fontWeight: "bold"
                         }
                       }
                     }}
                     getTdProps={(state, rowInfo, column, instance) => {
                        return {

                          onClick: (e, handleOriginal) => {

                            const { expanded } = state;
                            const path = rowInfo.nestingPath[0];
                            const diff = { [path]: expanded[path] ? false : true };

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

                        }

                      }
                    }

                      SubComponent={row => {
                        return (
                          <div>
                            <div style={{ border: "4px", borderStyle: "solid solid none solid", borderColor: "rgb(0, 0, 0)" }}>
                              <ReactTable
                                data={row.original.ORF1p_variants}
                                columns={orf1p_column}
                                defaultPageSize={10}
                                showPageSizeOptions={false}
                                pageSizeOptions={[3, 5, 10, 20, 25, 50]}
                                showPagination={true}
                                showPaginationTop={true}
                                showPaginationBottom= {false}
                                defaultSortDesc={true}
                                minRows={0}
                                getTdProps={(state, rowInfo, column, instance) => {
                                   return {
                                     onClick: (e, handleOriginal) => {



                                       if (rowInfo.original.name !== "NA" && column.id === "ORF1p_var_name" || column.id === "ORF1p_var"){
                                          window.open(
                                            "../visualise/" + rowInfo.original.name.slice(0,5),
                                            '_blank' // <- This is what makes it open in a new window.
                                          );
                                       }

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
                            <div style={{ border: "4px", borderStyle: "none solid solid solid", borderColor: "rgb(0, 0, 0)" }}>
                              <ReactTable
                                data={row.original.ORF2p_variants}
                                columns={orf2p_column}
                                defaultPageSize={10}
                                showPageSizeOptions={false}
                                pageSizeOptions={[3, 5, 10, 20, 25, 50]}
                                showPagination={true}
                                defaultSortDesc={true}
                                minRows={0}
                                getTdProps={(state, rowInfo, column, instance) => {
                                   return {
                                     onClick: (e, handleOriginal) => {

                                       console.log(rowInfo.original.name)
                                       console.log(rowInfo.original.confidence)
                                       if (rowInfo.original.name === "ORF2p_HS_58"){
                                         window.location = "../visualise/test2"
                                       } else if (rowInfo.original.name === "ORF2p_HS_111"){
                                         window.location = "../visualise/"
                                       } else if (rowInfo.original.name !== "NA" && column.id === "ORF2p_var_name" || column.id === "ORF2p_var"){
                                          window.open(
                                            "../visualise/" + rowInfo.original.name.slice(0,5),
                                            '_blank' // <- This is what makes it open in a new window.
                                          );

                                       }

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
          </div>
        </div>
  )}
};

export default Table;
