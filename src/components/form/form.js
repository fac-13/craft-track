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
	}

	handleDetailsChange = (e) => {
		e.persist();
		const { id, value } = e.target;

		this.setState(({ details: prevDetails }) => {
			return { details: { ...prevDetails, [id]: value } };
		});
	}

	handleFormData = (e) => {
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

		postData("https://crafttrack-server.herokuapp.com/postItem", params)
			.then((res) => {
				console.log(`Data added! Response: ${res}`);
				// return fetch() // for update
				return Promise.resolve({msg: "all data"});
			})
			.then((response) => {
				// update app state with response
				console.log(response);
				console.log("call all state handler with new data");
			})
			.then(() => {
				this.props.changePage(e, "all");
			})
			.catch((err) => console.log(err));


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