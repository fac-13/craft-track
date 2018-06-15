import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import FormHead from "./formHead/formHead";
import FormCraftDetails from "./formCraftDetails/formCraftDetails";
import Icon from "../styled/icon/icon";
import Heading from "../styled/heading/heading";
import Wrapper from "../styled/wrapper/wrapper";
import postData from "../../utility/postData";
import getRandomColor from "../../utility/getRandomColor";

const PositionExitButton = styled.div.attrs({
	className: "absolute"
})`
max-width: 4.5rem;
top: -2rem;
right: -3rem;
`;

export default class LogCraftForm extends React.Component {

	state = {
		type: "shoe",
		details: {
			colourStitching: getRandomColor(),
			colourFront: getRandomColor(),
			colourBack: getRandomColor(),
			shoeSize: "36",
		},
	}

	handleDetailsChange = (e) => {
		e.persist();
		const { id, value } = e.target;

		this.setState(({ details: prevDetails }) => {
			return { details: { ...prevDetails, [id]: value } };
		});
	}

	handleFormData = (e) => {
		e.preventDefault();
		e.persist();
		const {
			type,
			details: {
				colourStitching,
				colourFront,
				colourBack,
				shoeSize
			}
		} = this.state;

		const params = {
			TableName: "Crafts",
			Item: {
				"id": { N: Date.now().toString() },
				"type": { S: type },
				"colourStitching": { S: colourStitching },
				"colourFront": { S: colourFront },
				"colourBack": { S: colourBack },
				"shoeSize": { N: shoeSize },
			}
		};

		postData("https://crafttrack-server.herokuapp.com/postItem/", params)
			.then(() => {
				this.props.getUpdatedData();
			})
			.then(() => {
				navigate("/tracker");
			})
			.catch((err) => console.log(err));

	}

	render() {
		const { type, details } = this.state;

		return (
			<Wrapper>
				<PositionExitButton>
					<Icon changePage={() => navigate("/tracker")} iconType="cross" width="5rem" />
				</PositionExitButton>
				<Heading>Log Craft</Heading>
				<FormHead type={type} style={details} />
				<FormCraftDetails type={type} details={details} handleChange={this.handleDetailsChange} />
				<Icon changePage={this.handleFormData} iconType="tick" width="7rem" />
			</Wrapper >
		);
	}
}