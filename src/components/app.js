import React from "react";
import "../../public/style.min.css";

import Header from "./header/header";
import Footer from "./footer/footer";
import Landing from "./landing/landing";
import Form from "./form/form";

export default class App extends React.Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Header />
				{/* <Landing /> */}
				<Form />
				<Footer />
			</React.Fragment>
		);
	}
}
