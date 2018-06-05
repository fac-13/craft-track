import React from "react";
import styled from "styled-components";
import FormHead from "./formHead/formHead";
import FormCraftDetails from "./formCraftDetails/formCraftDetails";
import FormCraftStatus from "./formCraftStatus/formCraftStatus";
import FormSubmitButton from "./formSubmitButton/formSubmitButton";

const Wrapper = styled.div.attrs({
	// className: "flex flex-column items-center justify-around"
}) `
	min-height: 80vh;
	margin: 10vh 5rem;
`;

export default class Form extends React.Component {

	state = {
		type: "shoe",
		shoeDetails: {
			colourStitching: "black",
			colourFront: "black",
			colourBack: "black",
			shoeSize: "36",
			quantity: "1",
		},
		workshopDetails: {
			title: "",
		},
		status: {
			complete: false,
			dateCompleted: "",
			hoursWorked: "",
			unitPrice: "",
		},
		formData: {},
	}

	handleTypeChange = (e) => {
		this.setState({ type: e.target.value });
	}
	handleDetailsChange = (e) => {
		e.persist();
		const { type } = this.state;

		if (type === "shoe") {
			this.setState(({ shoeDetails: prevDetails }) => {
				return { shoeDetails: { ...prevDetails, [e.target.id]: e.target.value } };
			});
		}

		if (type === "workshop") {
			this.setState({ workshopDetails: { title: e.target.value } });
		}

	}
	handleStatusChange = (e) => {
		e.persist();
		this.setState(({ status: prevStatus }) => {
			let { id, value } = e.target;

			if (id === "complete") {
				value = {
					"yes": true,
					"no": false,
				}[value];
			}

			return { status: { ...prevStatus, [id]: value } };
		});
	}

	handleFormData = () => {
		const { type, shoeDetails, workshopDetails, status } = this.state;
		const details = type === "shoe"
			? shoeDetails
			: type === "workshop"
				? workshopDetails
				: {};

		const formData = {
			id: Date.now(),
			details,
			status,
		};

		this.setState({ formData }, () => {
			console.log("add craft to storage");
		});
	}

	render() {

		const { type, shoeDetails, workshopDetails, status } = this.state;
		const details =
			type === "shoe"
				? shoeDetails
				: type === "workshop"
					? workshopDetails
					: {};

		return (
			<Wrapper>
				<h3 className="sg-heading">Submit Craft</h3>
				<FormHead type={type} handleChange={this.handleTypeChange} style={type === "shoe" ? shoeDetails : ""} />
				<FormCraftDetails type={type} details={details} handleChange={this.handleDetailsChange} />
				<FormCraftStatus status={status} handleChange={this.handleStatusChange} />
				<FormSubmitButton handleClick={this.handleFormData} />
			</Wrapper>
		);
	}
}