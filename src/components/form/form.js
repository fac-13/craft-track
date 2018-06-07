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


	handleAdd = (event) => {
		event.preventDefault();
		const { id, value } = event.target.previousSibling;

		if (id === "otherQuantity") {
			this.setState(({ formData: prevFormData }) => {
				return {
					formData: {
						...prevFormData,
						other: {
							quantity: +value + 1,
						},
					},
				};
			});
		} else {
			this.setState(({ formData: prevFormData }) => {
				return {
					formData: {
						...prevFormData,
						[id]: +value + 1,
					}
				};
			});
		}
	}

	handleSub = (event) => {
		event.preventDefault();
		const { id, value } = event.target.nextSibling;

		// if (this.status.formData[id] >= 0 ) {
		if (value  > 0 ) {
			if (id === "otherQuantity") {
				this.setState(({ formData: prevFormData }) => {
					return {
						formData: {
							...prevFormData,
							other: {
								description: prevFormData.other.description,
								quantity: +value - 1,
							},
						},
					};
				});
			} else {
				this.setState(({ formData: prevFormData }) => {
					return {
						formData: {
							...prevFormData,
							[id]: +value - 1,
						}
					};
				});
			}
		}
	}

	
	handleDescriptionInput = ({ target: { value }}) => {
		this.setState(({ formData: prevFormData }) => {
			return {
				formData: {
					...prevFormData,
					other: {
						description: value,
						quantity: prevFormData.other.quantity,
					}

				}
			};
		});
	}


	render() {
		const { formData } = this.state;
		const { changePage } = this.props;

		return (
			<FormWrapper>
				<ExitButton onClick={(e) => changePage(e, "all")}><img className="icon-width" src={icon__cross} alt="cross" /></ExitButton>
				<h3 className="sg-heading">Submit Craft</h3>
				<FormDetails
					formData={formData}
					handleAdd={this.handleAdd}
					handleSub={this.handleSub}
					handleChange={this.handleDescriptionInput}
				/>
				<FormSubmitButton handleClick={this.handleFormData} />
			</FormWrapper >
		);
	}
}