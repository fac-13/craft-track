import React from "react";
import styled from "styled-components";
import FormHead from "./formHead/formHead";
import FormCraftDetails from "./formCraftDetails/formCraftDetails";
import FormCraftStatus from "./formCraftStatus/formCraftStatus";
import FormSubmitButton from "./formSubmitButton/formSubmitButton";

const Wrapper = styled.div.attrs({
	className: "flex flex-column items-center justify-around"
}) `
	min-height: 80vh;
	margin: 10vh 5rem;
`;

export default class Form extends React.Component {
	state = {
		type: "shoe",
		details: {
			stitchingColour: "blue",
		},
		status: {

		},
	}

	handleTypeChange = (e) => {
		this.setState({ type: e.target.value });
	}
	handleDetailsChange = (e) => {
		const { type } = this.state;
		if (type === "shoe") {
			console.log("sib: ", e.target.previousSibling.textContent);
			this.setState({ details: { stitchingColour: e.target.value } });
		}

		if (type === "workshop") {
			// this.setState({ de: e.target.value });
		}

	}
	handleStatusChange = (e) => {
		this.setState({ type: e.target.value });
	}

	render() {

		const { type, details } = this.state;

		return (
			<Wrapper>
				<h3>Submit Craft</h3>
				<FormHead type={type} handleChange={this.handleTypeChange} />
				<FormCraftDetails type={type} handleChange={this.handleDetailsChange} details={details} />
				<FormCraftStatus handleChange={this.handleStatusChange} />
				<FormSubmitButton />
			</Wrapper>
		);
	}
}