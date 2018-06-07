import React from "react";
import styled from "styled-components";
import FormDetails from "./formDetails/formDetails";
import FormSubmitButton from "./formSubmitButton/formSubmitButton";
import icon__cross from "../../../public/assets/icon__cross.svg";

const FormWrapper = styled.form.attrs({
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
		formData: {
			shoeCut: 0,
			shoeSew: 0,
			slipperCut: 0,
			slipperSew: 0,
			other: {
				description: "",
				quantity: 0,
			},
		},
	}

	// handleDetailsChange = (e) => {
	// 	e.persist();
	// 	this.setState(({ formData: prevFormData }) => {
	// 		return { formData: { ...prevFormData, [e.target.id]: e.target.value } };
	// 	});		
	// }

	// handleFormData = () => {
	// 	const { type, shoeDetails, workshopDetails, status } = this.state;
	// 	const details = type === "shoe"
	// 		? shoeDetails
	// 		: type === "workshop"
	// 			? workshopDetails
	// 			: {};

	// 	const formData = {
	// 		id: Date.now(),
	// 		details,
	// 		status,
	// 	};

	// 	this.setState({ formData }, () => {
	// 		console.log("add craft to storage");
	// 	});
	// }




	render() {
		const { formData } = this.state;
		const { changePage } = this.props;

		return (
			<FormWrapper>
				<ExitButton onClick={(e) => changePage(e, "all")}><img className="icon-width" src={icon__cross} alt="cross" /></ExitButton>
				<h3 className="sg-heading">Submit Craft</h3>
				<FormDetails formData={formData} />
				<FormSubmitButton handleClick={this.handleFormData} />
			</FormWrapper >
		);
	}
}