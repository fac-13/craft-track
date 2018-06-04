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
			title: null,
			colourStitching: "blue",
			colourFront: "caramel",
			colourBack: "caramel",
			shoeSize: "36",
			quantity: "1",
		},
		status: {
			complete: false,
			dateCompleted: null,
			hoursWorked: null,
			unitPrice: null,
		},
	}

	handleTypeChange = (e) => {
		this.setState({ type: e.target.value });
	}
	handleDetailsChange = (e) => {
		const { type } = this.state;

		if (type === "shoe") {
			const labelName = e.target.previousSibling.name;

			console.log("sib: ", labelName);

			this.setState({ details: { [labelName]: e.target.value } } );
		}

		if (type === "workshop") {
			// this.setState({ details: { title: e.target.value } } );
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