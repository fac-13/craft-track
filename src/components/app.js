import React from "react";
import "../../public/style.min.css";

import Frame from "./styled/frame/frame";
import Landing from "./landing/landing";

export default class App extends React.Component {
	state = {
		pageView: "landing"
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
			page = <h1>All products view</h1>;
		} else if (this.state.pageView == "form") {
			page = <h1>Form</h1>;
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
