import React from "react";
import "../../public/style.min.css";
import { Router, Link } from "@reach/router";

import Frame from "./styled/frame/frame";
import Landing from "./landing/landing";
import LogCraftForm from "./logCraftForm/logCraftForm";
import All from "./all/all";
import Completed from "./completed/completed";

import getAllData from "../utility/getAllData";
import formatDDBResponse from "../utility/formatDDBResponse";
import separateCraftsViews from "../utility/separateCraftsViews";

import styled from "styled-components";

const Nav = styled.nav.attrs({
	className: "flex"
})``;

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
		const { crafts, updatedCrafts } = this.state;
		const { changePage, getUpdatedData, toggleCheckbox } = this;
		const { todoCrafts, completedCrafts } = separateCraftsViews(crafts);

		return (
			<React.Fragment>
				<Frame position="top" />

				<Nav>
					<Link to="/">Landing</Link>
					<Link to="all">Tracker</Link>
					<Link to="completed">Completed</Link>
					<Link to="log-craft">Log Craft</Link>
				</Nav>

				<Router>
					<Landing path="/" changePage={changePage} />

					<All path="all" changePage={changePage} crafts={todoCrafts} updatedCrafts={updatedCrafts} toggleCheckbox={toggleCheckbox} />
					<LogCraftForm path="log-craft" changePage={changePage} getUpdatedData={getUpdatedData()} />

					<Completed path="completed" changePage={changePage} crafts={completedCrafts} />
				</Router>
			</React.Fragment>
		);
	}
}
