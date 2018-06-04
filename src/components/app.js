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
		this.setState(() => {
			return { pageView: page };
		});
	}

	render() {
		let page = <Landing changePage={this.changePage} />;
		if (this.state.pageView == "viewall") {
			page = <All crafts={crafts} />;
		} else if (this.state.pageView == "form") {
			page = <Form changePage={this.changePage} />;
		}
		return (
			<React.Fragment>
				<Frame position="top" />
				{page}
				<Frame position="bottom" />
			</React.Fragment>
		);
	}
}
