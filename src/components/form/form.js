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

	// ! compare with dummy data property names
	state = {
		type: "shoe",
		details: {
			title: "",
			colourStitching: "blue",
			colourFront: "caramel",
			colourBack: "caramel",
			shoeSize: "36",
			quantity: "1",
		},
		status: {
			complete: false,
			dateCompleted: "",
			hoursWorked: "",
			unitPrice: "",
		},
	}

	handleTypeChange = (e) => {
		this.setState({ type: e.target.value });
	}
	handleDetailsChange = (e) => {
		e.persist();
		const { type } = this.state;

		if (type === "shoe") {
			this.setState(({ details: prevDetails }) => {
				return { details: { ...prevDetails, [e.target.id]: e.target.value } };
			});
		}

		if (type === "workshop") {
			// ! deletes shoe related details
			// ! when type is changed to shoe only he title field is available
			this.setState({ details: { title: e.target.value } });
		}

	}
	handleStatusChange = (e) => {
		e.persist();
		this.setState(({ status: prevStatus }) => {
			let { id } = e.target;
			let { value } = e.target;

			if (id === "complete") {
				let value = {
					"yes": true,
					"no": false,
				}[value];
			}


			return { status: { ...prevStatus,  [id]: value } };
		});
	}

	render() {

		const { type, details, status } = this.state;

		return (
			<Wrapper>
				<h3>Submit Craft</h3>
				<FormHead type={type} handleChange={this.handleTypeChange} />
				<FormCraftDetails type={type} details={details} handleChange={this.handleDetailsChange} />
				<FormCraftStatus status={status} handleChange={this.handleStatusChange} />
				<FormSubmitButton />
			</Wrapper>
		);
	}
}