import React, { Component } from 'react';
import ReactTable from "react-table";
import rtpea_img from "../Logo/rtpea_img1.png"
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
      switched: true
    };
  }

  searchURL = () => {
    let { url_id } = this.state;
    let url = "http://localhost:3001/table-demo/"
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

  render (){
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
    }, {
    Header: 'Tissue',
    accessor: "tissue_type"
  }, {
  Header: 'ORF1p',
  id: "ORF1_data",
  accessor: "ORF1p.confidence",
  Cell: row => (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#dadada',
            borderRadius: '2px'
          }}
        >
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
            {row.value !== 0 ? row.value : row.value + " (Pos. Variants)"}
          </div>
      </div>
      )
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
              {row.value !== 0 ? row.value : row.value + " (Pos. Variants)"}
            </div>
        </div>
        )
    }
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
            {row.value !== 0 ? row.value : row.value + " (Pos. Variants)"}
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


      return (
        <div>

          <div className="col-md-10 offset-md-1" style={{backgroundColor: this.state.background_colour, color: this.state.text_colour}}>

            <Switch onClick={this.changeColour} on={this.state.switched} className='switch-colour'/>
            <br />

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
              minRows={0}
              SubComponent={row => {
                return (
                  <div style={{ border: "4px", borderStyle: "solid solid solid solid", borderColor: "rgb(1, 111, 186)" }}>
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
)
  }

}
export default Table;
