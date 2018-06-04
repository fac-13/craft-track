import React from "react";
import "../../public/style.min.css";

import Frame from "./styled/frame/frame";
import Landing from "./landing/landing";

export default class App extends React.Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Frame position="top" />
				<Landing />
				<Frame position="bottom" />
			</React.Fragment>
		);
	}
}
