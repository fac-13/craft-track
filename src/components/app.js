import React from "react";
import "../../public/style.min.css";

import Frame from "./styled/frame/frame";
import Landing from "./landing/landing";
import Form from "./form/form";
import All from "./all/all";

//dummy data to be passed into <All> component
import { oldData } from "./utility/dummyData";
const crafts = oldData;

export default class App extends React.Component {
	state = {
		pageView: "form",
		crafts: crafts,
	};

	changePage = (e, page) => {
		e.preventDefault();
		console.log("pressed");
		this.setState(() => {
			return { pageView: page };
		});
	}

	render() {
		const { pageView } = this.state;
		return (
			<React.Fragment>
				<Frame position="top" />
				{pageView === "all" && <All changePage={this.changePage} crafts={crafts} />}
				{pageView === "form" && <Form />}
				{pageView === "landing" && <Landing changePage={this.changePage} />}
				<Frame position="bottom" />
			</React.Fragment>
		);
	}
}
