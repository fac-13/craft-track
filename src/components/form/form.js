import React from "react";
import styled from "styled-components";
import FormHead from "./formHead/formHead";
import FormCraftDetails from "./formCraftDetails/formCraftDetails";
import FormCraftStatus from "./formCraftStatus/formCraftStatus";
import FormSubmitButton from "./formSubmitButton/formSubmitButton";
import icon__cross from "../../../public/assets/icon__cross.svg";

const Wrapper = styled.div.attrs({
	className: "relative flex flex-column items-center justify-around"
}) `
	min-height: 80vh;
	margin: 10vh 5rem;
`;

const ExitButton = styled.button.attrs({
	className: "absolute"
}) `
max-width: 4.5rem;
top: -2rem;
right: -3rem;
`;

export default class Form extends React.Component {

	state = {
		type: "shoe",
		shoeDetails: {
			colourStitching: "white",
			colourFront: "white",
			colourBack: "white",
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
		const { changePage } = this.props;

		return (
			<Wrapper>
				<ExitButton onClick={(e) => changePage(e, "all")}><img className="icon-width" src={icon__cross} alt="cross" /></ExitButton>
				<h3>Submit Craft</h3>
				<FormHead type={type} handleChange={this.handleTypeChange} />
				<FormCraftDetails type={type} details={details} handleChange={this.handleDetailsChange} />
				<FormCraftStatus status={status} handleChange={this.handleStatusChange} />
				<FormSubmitButton handleClick={this.handleFormData} />
			</Wrapper>
		);
	}
}