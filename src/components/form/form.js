import React from "react";
import styled from "styled-components";

import FormHead from "./formHead/formHead";
import FormCraftDetails from "./formCraftDetails/formCraftDetails";
import FormCraftStatus from "./formCraftStatus/formCraftStatus";
import Icon from "../styled/icon/icon";
import Heading from "../styled/heading/heading";
import Wrapper from "../styled/wrapper/wrapper";

const PositionExitButton = styled.div.attrs({
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

	handleFormData = (e) => {
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

		this.props.changePage(e, "all");
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
				<PositionExitButton>
					<Icon changePage={(e) => changePage(e, "all")} iconType="cross" width="5rem" />
				</PositionExitButton>
				<Heading>Submit Craft</Heading>
				<FormHead type={type} handleChange={this.handleTypeChange} style={type === "shoe" ? shoeDetails : ""} />
				<FormCraftDetails type={type} details={details} handleChange={this.handleDetailsChange} />
				<FormCraftStatus status={status} handleChange={this.handleStatusChange} />
				<Icon changePage={(e) => this.handleFormData(e)} iconType="tick" width="7rem" />
			</Wrapper >
		);
	}
}