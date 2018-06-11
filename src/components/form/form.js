import React from "react";
import styled from "styled-components";

import FormHead from "./formHead/formHead";
import FormCraftDetails from "./formCraftDetails/formCraftDetails";
import Icon from "../styled/icon/icon";
import Heading from "../styled/heading/heading";
import Wrapper from "../styled/wrapper/wrapper";
import postData from "../../utility/postData";

const PositionExitButton = styled.div.attrs({
	className: "absolute"
})`
max-width: 4.5rem;
top: -2rem;
right: -3rem;
`;

export default class Form extends React.Component {

	state = {
		type: "shoe",
		details: {
			colourStitching: "black",
			colourFront: "black",
			colourBack: "black",
			shoeSize: "36",
		},
		formData: {},
	}

	handleDetailsChange = (e) => {
		e.persist();
		this.setState(({ shoeDetails: prevDetails }) => {
			return { shoeDetails: { ...prevDetails, [e.target.id]: e.target.value } };
		});
	}

	handleFormData = (e) => {
		const { type, details } = this.state;

		const formData = {
			id: Date.now(),
			type,
			details,
			status,
		};

		this.setState({ formData }, () => {
			const newFormData = this.state.formData;
			let params;

			if (newFormData.type === "shoe") {
				params = {
					TableName: "Crafts",
					Item: {
						"id": { N: newFormData.id.toString() },
						"type": { S: newFormData.type },
						"colourStitching": { S: newFormData.details.colourStitching },
						"colourFront": { S: newFormData.details.colourFront },
						"colourBack": { S: newFormData.details.colourBack },
						"shoeSize": { N: newFormData.details.shoeSize },
					}
				};
			}

			postData("http://localhost:3000/postItem", params)
				.then((res) => console.log(`Data added! Response: ${res}`))
				.catch((err) => console.log(err));
		});

		this.props.changePage(e, "all");
	}

	render() {
		const { type, details } = this.state;
		const { changePage } = this.props;

		return (
			<Wrapper>
				<PositionExitButton>
					<Icon changePage={(e) => changePage(e, "all")} iconType="cross" width="5rem" />
				</PositionExitButton>
				<Heading>Submit Craft</Heading>
				<FormHead type={type} style={details} />
				<FormCraftDetails type={type} details={details} handleChange={this.handleDetailsChange} />
				<Icon changePage={(e) => this.handleFormData(e)} iconType="tick" width="7rem" />
			</Wrapper >
		);
	}
}