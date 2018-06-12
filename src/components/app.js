import React from "react";
import "../../public/style.min.css";

import Frame from "./styled/frame/frame";
import Landing from "./landing/landing";
import Form from "./form/form";
import All from "./all/all";
import getAllData from "../utility/getAllData";
import formatDDBResponse from "../utility/formatDDBResponse";



export default class App extends React.Component {
	state = {
		pageView: "landing",
		crafts: [],
		updatedCrafts: [],
	};

	componentDidMount() {
		getAllData("https://crafttrack-server.herokuapp.com/getItems")
			.then((response) => {
				console.log("response", response);
				let crafts = formatDDBResponse(response);
				this.setState({ crafts: crafts });
			})
			.catch(err => console.log(err.message));

	}

	changePage = (e, page) => {
		e.preventDefault();
		console.log("pressed");
		this.setState(() => {
			return { pageView: page };
		});
	}

	toggleCheckbox = (id, step) => {
		// find craft to be updated and toggle specified step
		let modifiedCraft = this.state.crafts.reduce((acc, curr) => {
			if (curr.id === id) {
				curr[step] = !curr[step];
				acc = curr;
			}
			return acc;
		}, {});

		let modifiedCraftList = this.state.updatedCrafts;
		//add checkedCraft to 
		modifiedCraftList.length === 0 ? modifiedCraftList.push(modifiedCraft) : null;

		// check if checkedCraft is already
		modifiedCraftList.reduce((acc, curr, index) => {
			if (!acc && curr.id === modifiedCraft.id) {
				modifiedCraftList[index] = curr;
				return acc = true;
			}

			if (!acc && (index === modifiedCraftList.length - 1)) {
				modifiedCraftList.push(modifiedCraft);
			}
			return acc;
		}, false);

		return this.setState({ updatedCrafts: modifiedCraftList });
	}

	getUpdatedData = () => {
		return () => {
			getAllData("https://crafttrack-server.herokuapp.com/getItems")
				.then((response) => {
					console.log("response", response);
					let crafts = formatDDBResponse(response);
					this.setState({ crafts: crafts });
				})
				.catch(err => console.log(err.message));
		};

	}

	render() {
		const { pageView, crafts } = this.state;
		const { changePage, getUpdatedData, toggleCheckbox } = this;
		return (
			<React.Fragment>
				<Frame position="top" />
				{pageView === "all" && <All changePage={changePage} crafts={crafts} toggleCheckbox={toggleCheckbox} />}
				{pageView === "form" && <Form changePage={changePage} getUpdatedData={getUpdatedData()} />}
				{pageView === "landing" && <Landing changePage={changePage} />}
				<Frame position="bottom" />
			</React.Fragment>
		);
	}
}
