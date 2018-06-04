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
	state = {}

	render() {

		return (
			<Wrapper>
				<h3>Submit Craft</h3>
				<FormHead />
				<FormCraftDetails />
				<FormCraftStatus />
				<FormSubmitButton />
			</Wrapper>
		);
	}
}