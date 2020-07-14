import React, { Component } from "react";
import Ideogram from "ideogram";
import NavVis from "./NavVis.js";
import Popup from "reactjs-popup";
import ideogram_example from "../Images/ideogram_example.png"

class Ideogram_d extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			value:"",
			prot_seq: this.props.match.params.id,
		};

		this.PA2_family = this.PA2_family.bind(this);
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
		this.button_click_ideo = this.button_click_ideo.bind(this);

	}


    componentDidMount = () => {
        function hyperlinkProtein(annot) {
          // Substring used to only search for LINE_1
          // var url = this.props.urlSource+'/sequence/' + annot.name;
          var url = "http://rtpea.com/sequence/" + annot.name;
          annot.displayName =
            '<a target="_blank" href="' + url + '">' + annot.name + "</a>";
          return annot;
        }
      
        fetch(this.props.urlSource + "/ideogram/" + this.state.prot_seq)
          .then((response) => response.json())
          .then((data) => {
            var config = {
              organism: "human",
              dataDir: "https://unpkg.com/ideogram@1.13.0/dist/data/bands/native/",
              annotations: data,
              annotationsLayout: "tracks",
              onWillShowAnnotTooltip: hyperlinkProtein,
              rotatable: true,
      
              container: "#ideo-container",
            };
      
            return new Ideogram(config);
          });
      };
      

      PA2_family = () => {
        this.setState({
          checked: !this.state.checked,
        });
      };

    button_click_ideo = () => {
        if (window.location.pathname === "/newideogram_expected"){
            window.location = "newideogram_expected/" + this.state.prot_seq;
        } else {
            window.location = this.state.prot_seq;
        }
    }

	 handleChange = (event) => {
	  this.setState({value: event.target.value});
	 }

	 handleSubmit = (event) => {

	var PA2_fam = [
   "PA2_1",
   "PA2_10",
   "PA2_11",
   "PA2_12",
   "PA2_13",
   "PA2_14",
   "PA2_15",
   "PA2_16",
   "PA2_17",
   "PA2_18",
   "PA2_19",
   "PA2_2",
   "PA2_20",
   "PA2_21",
   "PA2_22",
   "PA2_23",
   "PA2_24",
   "PA2_25",
   "PA2_26",
   "PA2_27",
   "PA2_28",
   "PA2_29",
   "PA2_3",
   "PA2_30",
   "PA2_31",
   "PA2_32",
   "PA2_33",
   "PA2_34",
   "PA2_35",
   "PA2_4",
   "PA2_5",
   "PA2_6",
   "PA2_7",
   "PA2_8",
   "PA2_9",
   "PA3_1"
 ]
 var HS_fam = [
  "HS_1",
  "HS_10",
  "HS_100",
  "HS_101",
  "HS_102",
  "HS_103",
  "HS_104",
  "HS_105",
  "HS_106",
  "HS_107",
  "HS_108",
  "HS_109",
  "HS_11",
  "HS_110",
  "HS_111",
  "HS_112",
  "HS_113",
  "HS_114",
  "HS_115",
  "HS_116",
  "HS_117",
  "HS_118",
  "HS_119",
  "HS_12",
  "HS_120",
  "HS_121",
  "HS_122",
  "HS_13",
  "HS_14",
  "HS_15",
  "HS_16",
  "HS_17",
  "HS_18",
  "HS_19",
  "HS_2",
  "HS_20",
  "HS_21",
  "HS_22",
  "HS_23",
  "HS_24",
  "HS_25",
  "HS_26",
  "HS_27",
  "HS_28",
  "HS_29",
  "HS_3",
  "HS_30",
  "HS_31",
  "HS_32",
  "HS_33",
  "HS_34",
  "HS_35",
  "HS_36",
  "HS_37",
  "HS_38",
  "HS_39",
  "HS_4",
  "HS_40",
  "HS_41",
  "HS_42",
  "HS_43",
  "HS_44",
  "HS_45",
  "HS_46",
  "HS_47",
  "HS_48",
  "HS_49",
  "HS_5",
  "HS_50",
  "HS_51",
  "HS_52",
  "HS_53",
  "HS_54",
  "HS_55",
  "HS_56",
  "HS_57",
  "HS_58",
  "HS_59",
  "HS_6",
  "HS_60",
  "HS_61",
  "HS_62",
  "HS_63",
  "HS_64",
  "HS_65",
  "HS_66",
  "HS_67",
  "HS_68",
  "HS_69",
  "HS_7",
  "HS_70",
  "HS_71",
  "HS_72",
  "HS_73",
  "HS_74",
  "HS_75",
  "HS_76",
  "HS_77",
  "HS_78",
  "HS_79",
  "HS_8",
  "HS_80",
  "HS_81",
  "HS_82",
  "HS_83",
  "HS_84",
  "HS_85",
  "HS_86",
  "HS_87",
  "HS_88",
  "HS_89",
  "HS_9",
  "HS_90",
  "HS_91",
  "HS_92",
  "HS_93",
  "HS_94",
  "HS_95",
  "HS_96",
  "HS_97",
  "HS_98",
  "HS_99"
]
	if (this.state.value === "PA2"){
		this.props.history.push('/newideogram_expected/'+PA2_fam)
	} else if (this.state.value === "HS"){
		this.props.history.push('/newideogram_expected/'+HS_fam)
	} else {
		this.props.history.push('/newideogram_expected/')
	}
	}





  render() {


    return (
			<div className="background-body-vis">

				<NavVis/>
				<div className="text-center">
					<h1>Chromosome Expected</h1>
					<div className="" style={{color:"black"}}>
						<Popup trigger={<button className="btn btn-outline-warning"> Information! </button>} modal>
							{close => (
								<div className="">
									<a className="close" onClick={close}>
										&times;
									</a>
									<div className="header"> ProtVista </div>
									<div className="content">
										{/* {" "} */}
										Click the Chromosomes to view Larger version
										<br/>
										<b>To find the <u>SEQUENCE</u>, hover over the annotation and click the link</b>
										<br />
										<img src={ideogram_example} alt="ideogram_example"/>
										<div className="header"></div>
										Legend:
										<br />
										HS = Red
										<br />
										PA = Blue

										<div className="header"></div>
									</div>
								</div>
							)}
						</Popup>
						</div>
				</div>
				<div className="container">
					<br/>
					<div className="line-seperator"></div>
				<br/>
				</div>
				Enter Family:
				<input
					style={{"width" : "400px"}}
          placeholder="e.g LINE_1_HS_101, HS_4, PA2_34, LINE_1_PA2_25_ORF1p"
          onChange={e => this.setState({ prot_seq: e.target.value.toUpperCase() })}
          onKeyPress={event => {if (event.key === "Enter") {
						if (window.location.pathname === "/newideogram_expected"){
							window.location = "newideogram_expected/" + event.target.value.toUpperCase();
						} else {
							window.location = event.target.value.toUpperCase();
						}

            }
          }}/>
					<button className="" style={{marginLeft:"2px"}} onClick={this.button_click_ideo}>Search Database</button>
					<br/>
				  <sup style={{"color":"white"}}>^ Separate families with comma or space ^</sup>


					 <br/>
						 <div className="container line-seperator" style={{align:"center",width:"20%"}}></div>
					
						 <div style={{"color":"white"}}>Sort by Family:</div>
			 <form onSubmit={this.handleSubmit}>
	        <label>
						<select value={this.state.value} onChange={this.handleChange}>
							<option selected value=""></option>
							<option value="ALL">ALL</option>
							<option value="HS">HS</option>
						  <option value="PA2">PA2</option>

						</select>
					</label>
			<input type="submit" value="Submit" />
		</form>


					<div className="container">
						<div className="line-seperator"></div>
					</div>
	
      <div id="ideo-container" className="black_text margin-left-ideogram"></div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
    );
  }
}




export default Ideogram_d;
