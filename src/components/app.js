import React from "react";
import styled from "styled-components";
import "../../public/style.min.css";
import { Router } from "@reach/router";

import Frame from "./styled/frame/frame";
import About from "./about/about";
import Tracker from "./tracker/tracker";
import LogCraftForm from "./logCraftForm/logCraftForm";
import ToBeInvoiced from "./toBeInvoiced/toBeInvoiced";
import NavLink from "./navLink/navLink";

import getAllData from "../utility/getAllData";
import formatDDBResponse from "../utility/formatDDBResponse";
import separateCraftsViews from "../utility/separateCraftsViews";

const Nav = styled.nav.attrs({
	className: "fixed"
})`
	top: 1rem;
	right: 1rem;
	z-index: 2;
`;

export default class App extends React.Component {
	state = {
		crafts: [],
		updatedCrafts: [],
		currentPage: "about",
	};

	componentDidMount() {
		getAllData("https://crafttrack-server.herokuapp.com/getItems")
			.then((response) => {
				console.log("response", response);
				let crafts = formatDDBResponse(response);
				this.setState({ crafts: crafts });
				console.log(crafts);
			})
			.catch(err => console.log(err.message));

	}

	toggleCheckbox = (id, step) => {
		// find craft to be updated and toggle specified step
		const { crafts, updatedCrafts } = this.state;
		let modifiedCraft = crafts.reduce((acc, curr) => {
			if (curr.id === id) {
				curr[step] = !curr[step];
				acc = curr;
			}
			return acc;
		}, {});

		let modifiedCraftList = [...updatedCrafts];
		//add the modifiedCraft to modifiedCraftList list
		modifiedCraftList.length === 0 ? modifiedCraftList.push(modifiedCraft) : null;

		// check if checkedCraft is already present, if so will update otherwise will push it to modifiedCraftList
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

	updateCurrentPage = (page) => {
		return () => {
			this.setState({ currentPage: page });
		};
	}

	addActiveClass = (page) => this.state.currentPage === page && "link--active";

	getUpdatedData = () => {
		return () => {
			getAllData("https://crafttrack-server.herokuapp.com/getItems")
				.then((response) => {
					let crafts = formatDDBResponse(response);
					this.setState({ crafts: crafts });
				})
				.catch(err => console.log(err.message));
		};

	}

	removeDeletedEntry = (craftId) => {
		let newCraftList = this.state.crafts.reduce((acc, curr) => {
			if (curr.id !== craftId) {
				acc.push(curr);
			}
			return acc;
		}, []);
		this.setState({ crafts: newCraftList });
	}

	render() {
		const { crafts, updatedCrafts } = this.state;
		const { getUpdatedData, toggleCheckbox, removeDeletedEntry, updateCurrentPage, addActiveClass } = this;
		const { todoCrafts, completedCrafts } = separateCraftsViews(crafts);

		return (
			<React.Fragment>
				<Frame position="top" />

				<Nav>
					<NavLink updateCurrentPage={updateCurrentPage} addActiveClass={addActiveClass} page="about" />
					<NavLink updateCurrentPage={updateCurrentPage} addActiveClass={addActiveClass} page="log-craft" />
					<NavLink updateCurrentPage={updateCurrentPage} addActiveClass={addActiveClass} page="tracker" />
					<NavLink updateCurrentPage={updateCurrentPage} addActiveClass={addActiveClass} page="to-be-invoiced" />
				</Nav>

				<Router>
					<About path="/" />
					<Tracker path="tracker" crafts={todoCrafts} updatedCrafts={updatedCrafts} toggleCheckbox={toggleCheckbox} removeDeletedEntry={removeDeletedEntry} />
					<LogCraftForm path="log-craft" getUpdatedData={getUpdatedData()} />
					<ToBeInvoiced path="to-be-invoiced" crafts={completedCrafts} toggleCheckbox={toggleCheckbox} />
				</Router>

				<Frame position="bottom" />
			</React.Fragment >
		);
	}
}
