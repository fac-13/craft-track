import React from "react";
import "../../public/style.min.css";

import Header from "./header/header";
import Footer from "./footer/footer";
import Landing from "./landing/landing";
import All from "./all/all";

//dummy data to be passed into <All> component
import { expected } from "./utility/dummyData";
const crafts = expected;

export default class App extends React.Component {
	state = {
		crafts: crafts
	};
	render() {
		const { crafts } = this.state;
		return (
			<React.Fragment>
				<Header />
				<All crafts={crafts} />
				<Footer />
			</React.Fragment>
		);
	}
}
