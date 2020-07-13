import React, { Component } from "react";
import ReactTable from "react-table";
import _ from "lodash";
import Switch from "react-toggle-switch";
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css";
import Popup from "reactjs-popup";
import highconf from "../Images/highconf.png";
import medconf from "../Images/medconf.png";
import lowconf from "../Images/lowconf.png";
import matchSorter from "match-sorter";

class BrowseOtherSpecies extends Component {
	constructor(props) {
		super();
		this.state = {
			data2: [],
			url_id: "NULL",
			filtered1: "",
		};
	}

	render() {
		const mynum = 20;
		const blank_data = "-";

		const main_columns = [
			{
				Header: "Data - Other Species",
				headerClassName: "my-favorites-column-header-group",
				columns: [
					{
						Header: (
							<h4>
								<b>PXD</b>
							</h4>
						),
						id: "data_pxd",
						accessor: (d) => d.PXD, // String-based value accessors!
						filterMethod: (filter, rows) =>
							matchSorter(rows, filter.value, {
								keys: ["data_pxd"],
								threshold: matchSorter.rankings.CONTAINS,
							}),
						filterAll: true,
						Cell: (row) => (
							<a
								href={
									"https://www.ebi.ac.uk/pride/archive/projects/" +
									row.original.PXD
								}
								target="_blank"
								style={{ color: "black" }}
							>
								<u>{row.original.PXD}</u>
							</a>
						),
					},
					{
						Header: (
							<h4>
								<b>STUDY</b>
							</h4>
						),
						id: "study",
						accessor: "study",
						filterMethod: (filter, rows) =>
							matchSorter(rows, filter.value, {
								keys: ["study"],
								threshold: matchSorter.rankings.CONTAINS,
							}),
						filterAll: true,
					},
					{
						Header: (
							<h4>
								<b>No. OF SAMPLES</b>
							</h4>
						),
						id: "data_num",
						accessor: (d) => d.sample.length,
					},
					{
						Header: (
							<h4>
								<b>DISEASE</b>
							</h4>
						),
						accessor: "disease",
						filterMethod: (filter, rows) =>
							matchSorter(rows, filter.value, {
								keys: ["disease"],
								threshold: matchSorter.rankings.CONTAINS,
							}),
						filterAll: true,
					},
					{
						Header: (
							<h4>
								<b>Organ</b>
							</h4>
						),
						accessor: "organ",
						filterMethod: (filter, rows) =>
							matchSorter(rows, filter.value, {
								keys: ["organ"],
								threshold: matchSorter.rankings.CONTAINS,
							}),
						filterAll: true,
						show: false,
					},
				],
			},
		];

		const sec_columns = [
			{
				Header: "",
				accessor: "-", // String-based value accessors!
			},
			{
				Header: <b>Sample Number</b>,
				id: "Sample_num",
				accessor: "Snumber",
			},
			{
				Header: <b>Tissue</b>,
				accessor: "tissue_type",
			},
			{
				Header: <b>ORF1p</b>,
				id: "ORF1p_data",
				accessor: "ORF1p.confidence",
				Cell: (row) => (
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: this.props.background_conf_colour,
							borderRadius: "2px",
						}}
					>
						{/* {row.value} */}
						<div
							style={{
								width: `${row.value}%`,
								height: "100%",
								backgroundColor:
									row.value > 80
										? this.props.high_conf_colour
										: row.value > 40
										? this.props.med_conf_colour
										: this.props.low_conf_colour,
								borderRadius: "2px",
								transition: "all .2s ease-out",
							}}
						>
							{row.value !== 0 ? row.value : row.value + " (Pos. Variants)"}
						</div>
					</div>
				),
			},
			{
				Header: <b>ORF2p</b>,
				id: "ORF2p_data",
				accessor: "ORF2p.confidence",
				aggregate: (vals) => _.sum(vals),
				Cell: (row) => (
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: this.props.background_conf_colour,
							borderRadius: "2px",
						}}
					>
						{/* {row.value} */}
						<div
							style={{
								width: `${row.value}%`,
								height: "100%",
								backgroundColor:
									row.value > 80
										? this.props.high_conf_colour
										: row.value > 40
										? this.props.med_conf_colour
										: this.props.low_conf_colour,
								borderRadius: "2px",
								transition: "all .2s ease-out",
							}}
						>
							{row.value !== 0 ? row.value : row.value + " (Pos. Variants)"}
						</div>
					</div>
				),
			},
			{
				Header: <b>HERV</b>,
				id: "HERV_data",
				accessor: "HERV.confidence",
				Cell: (row) => (
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: this.props.background_conf_colour,
							borderRadius: "2px",
						}}
					>
						{/* {row.value} */}
						<div
							style={{
								width: `${row.value}%`,
								height: "100%",
								backgroundColor:
									row.value > 80
										? this.props.high_conf_colour
										: row.value > 40
										? this.props.med_conf_colour
										: this.props.low_conf_colour,
								borderRadius: "2px",
								transition: "all .2s ease-out",
							}}
						>
							{row.value}
						</div>
					</div>
				),
			},
			{
				Header: <b>Top Expr. Var. ORF1</b>,
				id: "top_expr_orf1",
				accessor: (d) => {
					var all_list1 = [];
					all_list1.push(d.ORF1p_variants[0].confidence);
					all_list1.sort(function (a, b) {
						return b - a;
					});
					return all_list1[0];
				},
				Cell: (row) => (
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: this.props.background_conf_colour,
							borderRadius: "2px",
						}}
					>
						{/* {row.value} */}
						<div
							style={{
								width: `${row.value}%`,
								height: "100%",
								backgroundColor:
									row.value > 80
										? this.props.high_conf_colour
										: row.value > 40
										? this.props.med_conf_colour
										: this.props.low_conf_colour,
								borderRadius: "2px",
								transition: "all .2s ease-out",
							}}
						>
							{row.value} &emsp;-&emsp;{" "}
							<span style={{ fontSize: "11px" }}>
								{" "}
								{row.original.ORF1p_variants[0].name === "NA"
									? row.original.ORF1p_variants[0].name
									: row.original.ORF1p_variants[0].name.slice(6)}
							</span>
						</div>
					</div>
				),
			},
			{
				Header: <b>Top Expr. Var. ORF2</b>,
				id: "top_expr_orf2",
				accessor: (d) => {
					var all_list2 = [];
					all_list2.push(d.ORF2p_variants[0].confidence);
					all_list2.sort(function (a, b) {
						return b - a;
					});
					return all_list2[0];
				},
				Cell: (row) => (
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: this.props.background_conf_colour,
							borderRadius: "2px",
						}}
					>
						{/* {row.value} */}
						<div
							style={{
								width: `${row.value}%`,
								height: "100%",
								backgroundColor:
									row.value > 80
										? this.props.high_conf_colour
										: row.value > 40
										? this.props.med_conf_colour
										: this.props.low_conf_colour,
								borderRadius: "2px",
								transition: "all .2s ease-out",
							}}
						>
							{row.value} &emsp;-&emsp;{" "}
							<span style={{ fontSize: "11px" }}>
								{" "}
								{row.original.ORF2p_variants[0].name === "NA"
									? row.original.ORF2p_variants[0].name
									: row.original.ORF2p_variants[0].name.slice(6)}
							</span>
						</div>
					</div>
				),
			},
		];

		const orf1p_column = [
			{
				Header: "",
				accessor: "-",
			},
			{
				Header: "",
				accessor: "-",
			},
			{
				Header: "",
				accessor: "-",
			},
			{
				Header: <b>ORF1p Variants</b>,
				id: "ORF1p_var_name",
				accessor: "name",
				Cell: (row) =>
					row.original.name != "NA" ? (
						<div className="browse-var-style" style={{ height: 22 }}>
							{row.value}
						</div>
					) : (
						<div>{row.value}</div>
					),
			},
			{
				Header: <b>ORF1p Confidence</b>,
				id: "ORF1p_var",
				accessor: "confidence",
				Cell: (row) => (
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: this.props.background_conf_colour,
							borderRadius: "2px",
						}}
					>
						{/* {row.value} */}
						<div
							style={{
								width: `${row.value}%`,
								height: "100%",
								backgroundColor:
									row.value > 80
										? this.props.high_conf_colour
										: row.value > 40
										? this.props.med_conf_colour
										: this.props.low_conf_colour,
								borderRadius: "2px",
								transition: "all 1s ease-out",
							}}
						>
							{row.value}
						</div>
					</div>
				),
			},
			{
				Header: "Sequence",
				accessor: "protein_seq",
				Cell: (row) =>
					row.original.name != "NA" ? (
						<div>
							<a
								className="browse-link-style"
								target="_blank"
								href={
									this.props.urlSource2 +
									"/sequence/" +
									row.original.name.slice(6)
								}
							>
								Sequence ⇗
							</a>
						</div>
					) : (
						""
					),
			},
			{
				Header: "",
				accessor: "-",
			},
			{
				Header: "",
				accessor: "-",
			},
		];

		const orf2p_column = [
			{
				Header: "",
				accessor: "-",
			},
			{
				Header: "",
				accessor: "-",
			},
			{
				Header: "",
				accessor: "-",
			},
			{
				Header: <b>ORF2p Variants</b>,
				id: "ORF2p_var_name",
				accessor: "name",
				Cell: (row) =>
					row.original.name != "NA" ? (
						<div className="browse-var-style" style={{ height: 22 }}>
							{row.value}
							{/* <button className="btn btn-primary" onClick={() => window.location = "/sequence/"+row.original.name.slice(6)}> Sequence </button> */}
						</div>
					) : (
						<div>{row.value}</div>
					),
			},
			{
				Header: <b>ORF2p Confidence</b>,
				id: "ORF2p_var",
				accessor: "confidence",
				Cell: (row) => (
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: this.props.background_conf_colour,
							borderRadius: "2px",
						}}
					>
						{/* {row.value} */}
						<div
							style={{
								width: `${row.value}%`,
								height: "100%",
								backgroundColor:
									row.value > 80
										? this.props.high_conf_colour
										: row.value > 40
										? this.props.med_conf_colour
										: this.props.low_conf_colour,
								borderRadius: "2px",
								transition: "all 1s ease-out",
							}}
						>
							{row.value}
						</div>
					</div>
				),
			},
			{
				Header: "Sequence",
				accessor: "protein_seq",
				Cell: (row) =>
					row.original.name != "NA" ? (
						<div>
							<a
								className="browse-link-style"
								target="_blank"
								href={
									this.props.urlSource2 +
									"/sequence/" +
									row.original.name.slice(6)
								}
							>
								Sequence ⇗
							</a>
							{/* <button className="btn btn-primary" onClick={() => window.location = "/sequence/"+row.original.name.slice(6)}> Sequence </button> */}
						</div>
					) : (
						""
					),
			},
			{
				Header: "",
				accessor: "-",
			},
			{
				Header: "",
				accessor: "-",
			},
		];

		return (
			<div>
				<div
					className="col-md-10 offset-md-1"
					style={{
						background: this.props.background_colour,
						color: this.props.text_colour,
					}}
				>
					<br />
					<ReactTable
						loading={this.props.loading}
						data={this.props.tableData}
						columns={main_columns}
						noDataText="No Data Has been found, Please re-filter your search parameters."
						loadingText="Please Wait. Data is Loading....If no data is returned the API server may be down."
						defaultPageSize={25}
						showPaginationTop={false}
						className="-striped -highlight"
						pageSizeOptions={[5, 10, 20, 25, 50, 100, 200]}
						filterable={true}
						minRows={0}
						getTdProps={(state, rowInfo, column, instance) => {
							return {
								onClick: (e, handleOriginal) => {
									{
										/* console.log("It was in this column:", column); */
									}
									const { expanded } = state;
									const path = rowInfo.nestingPath[0];
									const diff = { [path]: expanded[path] ? false : true };
									{
										/* console.log(rowInfo) */
									}
									if (handleOriginal) {
										handleOriginal();
									}
									instance.setState({
										expanded: {
											...expanded,
											...diff,
										},
									});
								},
							};
						}}
						SubComponent={(row) => {
							return (
								<div
									style={{
										border: "4px",
										borderStyle: "solid solid solid solid",
										borderColor: "rgb(186, 0, 0)",
									}}
								>
									{/* {console.log(row.original.sample)} console.log(state)*/}
									<ReactTable
										data={row.original.sample}
										columns={sec_columns}
										defaultPageSize={300}
										showPagination={true}
										showPageJump={false}
										pageSizeOptions={[5, 10, 20, 25, 50, 100, 200, 300]}
										defaultSortDesc={true}
										minRows={0}
										getTbodyProps={(state, rowInfo, column, rtInstance) => {
											if (state.pageSize > 10 && state.pageSize < 300) {
												return {
													style: {
														height: "auto",
													},
												};
											} else {
												return {
													style: {
														height:
															state.pageRows.length > 9 ? "400px" : "auto",
													},
												};
											}
										}}
										getPaginationProps={(
											state,
											rowInfo,
											column,
											rtInstance
										) => {
											return {
												style: {
													fontWeight: "bold",
												},
											};
										}}
										getTdProps={(state, rowInfo, column, instance) => {
											return {
												onClick: (e, handleOriginal) => {
													{
														/* console.log("It was in this column:", column); */
													}
													const { expanded } = state;
													const path = rowInfo.nestingPath[0];
													const diff = {
														[path]: expanded[path] ? false : true,
													};
													{
														/* console.log(rowInfo) */
													}
													if (handleOriginal) {
														handleOriginal();
													}
													instance.setState({
														expanded: {
															...expanded,
															...diff,
														},
													});
												},
											};
										}}
										SubComponent={(row) => {
											return (
												<div>
													<div
														style={{
															border: "4px",
															borderStyle: "solid solid none solid",
															borderColor: "rgb(0,0,0)",
														}}
													>
														{/* {console.log(row.original)} */}
														<ReactTable
															data={row.original.ORF1p_variants}
															columns={orf1p_column}
															defaultPageSize={10}
															showPageSizeOptions={false}
															pageSizeOptions={[3, 5, 10, 20, 25, 50]}
															showPagination={true}
															showPaginationTop={true}
															showPaginationBottom={false}
															defaultSortDesc={true}
															minRows={0}
															getTdProps={(
																state,
																rowInfo,
																column,
																instance
															) => {
																return {
																	onClick: (e, handleOriginal) => {
																		{
																			/* console.log("It was in this column:", column); */
																		}
																		{
																			/* console.log(rowInfo.original.name)
																			 console.log(rowInfo.original.confidence) */
																		}
																		if (
																			(rowInfo.original.name !== "NA" &&
																				column.id === "ORF1p_var_name") ||
																			column.id === "ORF1p_var"
																		) {
																			window.open(
																				"../visualise/" + rowInfo.original.name,
																				"_blank" // <- This is what makes it open in a new window.
																			);
																		}
																		{
																			/* console.log(rowInfo) */
																		}
																		if (handleOriginal) {
																			handleOriginal();
																		}
																	},
																};
															}}
															showPageJump={false}
															className="-striped -highlight"
														/>
													</div>
													<div
														style={{
															border: "4px",
															borderStyle: "none solid solid solid",
															borderColor: "rgb(0,0,0)",
														}}
													>
														{/* {console.log(row.original)} */}
														<ReactTable
															data={row.original.ORF2p_variants}
															columns={orf2p_column}
															defaultPageSize={10}
															showPageSizeOptions={false}
															pageSizeOptions={[3, 5, 10, 20, 25, 50]}
															showPagination={true}
															defaultSortDesc={true}
															minRows={0}
															getTdProps={(
																state,
																rowInfo,
																column,
																instance
															) => {
																return {
																	onClick: (e, handleOriginal) => {
																		if (
																			(rowInfo.original.name !== "NA" &&
																				column.id === "ORF2p_var_name") ||
																			column.id === "ORF2p_var"
																		) {
																			window.open(
																				"../visualise/" + rowInfo.original.name,
																				"_blank" // <- This is what makes it open in a new window.
																			);
																		}
																		{
																			/* console.log(rowInfo) */
																		}
																		if (handleOriginal) {
																			handleOriginal();
																		}
																	},
																};
															}}
															showPageJump={false}
															className="-striped -highlight"
														/>
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
				<br />
			</div>
		);
	}
}
export default BrowseOtherSpecies;
