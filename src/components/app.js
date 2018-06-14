import React from "react";
import styled from "styled-components";
import "../../public/style.min.css";
import { Router, Link } from "@reach/router";

import Frame from "./styled/frame/frame";
import About from "./about/about";
import Todo from "./todo/todo";
import LogCraftForm from "./logCraftForm/logCraftForm";
import ToBeInvoiced from "./toBeInvoiced/toBeInvoiced";

import getAllData from "../utility/getAllData";
import formatDDBResponse from "../utility/formatDDBResponse";
import separateCraftsViews from "../utility/separateCraftsViews";


const Nav = styled.nav.attrs({
	className: "flex"
})`
	justify-content: space-between;
`;

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
		const { getUpdatedData, toggleCheckbox } = this;
		const { todoCrafts, completedCrafts } = separateCraftsViews(crafts);

		return (
			<React.Fragment>
				<Frame position="top" />

				<Nav>
					<Link to="/">About</Link>
					<Link to="log-craft">Log Craft</Link>
					<Link to="todo">Tracker</Link>
					<Link to="to-be-invoiced">To Be Invoiced</Link>
				</Nav>

				<Router>
					<About path="/" />
					<Todo path="todo" crafts={todoCrafts} updatedCrafts={updatedCrafts} toggleCheckbox={toggleCheckbox} />
					<LogCraftForm path="log-craft" getUpdatedData={getUpdatedData()} />
					<ToBeInvoiced path="to-be-invoiced" crafts={completedCrafts} />
				</Router>

				<Frame position="bottom" />
			</React.Fragment>
		);
	}
}
