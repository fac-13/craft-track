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
		crafts: {},
	};

	componentDidMount() {
		getAllData("https://crafttrack-server.herokuapp.com/getItems")
			.then((response) => {
				let crafts = formatDDBResponse(response);
				this.setState({ crafts: crafts }, () => {
					console.log(this.state.crafts);
				});
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

	render() {
		const { pageView, crafts } = this.state;
		return (
			<React.Fragment>
				<Frame position="top" />
				{pageView === "all" && <All changePage={this.changePage} crafts={crafts} />}
				{pageView === "form" && <Form changePage={this.changePage} />}
				{pageView === "landing" && <Landing changePage={this.changePage} />}
				<Frame position="bottom" />
			</React.Fragment>
		);
	}
}
