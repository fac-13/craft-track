import React from "react";
import "../../public/style.min.css";

import Frame from "./styled/frame/frame";
import Landing from "./landing/landing";
import All from "./all/all";

//dummy data to be passed into <All> component
import { oldData } from "./utility/dummyData";
const crafts = oldData;

export default class App extends React.Component {
	state = {
		crafts: crafts
	};
	render() {
		const { crafts } = this.state;
		return (
			<React.Fragment>
				<Frame position="top" />
				<Landing />
				<Frame position="bottom" />
			</React.Fragment>
		);
	}
}
