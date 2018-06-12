import React from "react";
import "../../public/style.min.css";

import Frame from "./styled/frame/frame";
import Landing from "./landing/landing";
import LogCraftForm from "./logCraftForm/logCraftForm";
import All from "./all/all";
import Completed from "./completed/completed";

import getAllData from "../utility/getAllData";
import formatDDBResponse from "../utility/formatDDBResponse";
import separateCraftsViews from "../utility/separateCraftsViews";

export default class App extends React.Component {
	state = {
		pageView: "completed",
		crafts: [],
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
		const { todoCrafts, completedCrafts } = separateCraftsViews(crafts);

		return (
			<React.Fragment>
				<Frame position="top" />
				{pageView === "landing" && <Landing changePage={this.changePage} />}

				{pageView === "all" && <All changePage={this.changePage} crafts={todoCrafts} />}
				{pageView === "form" && <LogCraftForm changePage={this.changePage} getUpdatedData={this.getUpdatedData()} />}
				
				{pageView === "completed" && <Completed changePage={this.changePage} crafts={completedCrafts} />}
				<Frame position="bottom" />
			</React.Fragment>
		);
	}
}
