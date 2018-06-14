import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import Shoe from "../styled/shoe/shoe";
import Wrapper from "../styled/wrapper/wrapper";
import Checkbox from "../checkbox/checkbox";
import Heading from "../styled/heading/heading";
import Button from "../button/button";
import { StyledButton } from "../styled/button/styledButton";

const CraftList = styled.ul.attrs({
	className: "list pl0"
})`
margin: 0;
width: 100%;
`;

const SubHeading = styled.span`
	width: 100%;
	text-align: center;
	font-family: 'Roboto';
`;

const SubHeadings = styled.div.attrs({
	className: "flex justify-between"
})`
	padding-left: 6rem;
	width: 80%;
	margin: 0 auto;
	padding-right: 4rem;
`;

const CraftItem = styled.li.attrs({
	className: "flex items-center justify-between"
})`
	width: 80%;
	height: 5rem;
	margin: 0 auto;
`;

const Center = styled.div.attrs({
	className: "fixed bottom-0 z-2"
})`
	left: 50%;
	transform: translateX(-50%);
`;


export default class ToBeInvoiced extends React.Component {

	removeEntry = (e, id) => {
		e.preventDefault();
		console.log(`remove craft: ${id}`);
	}

	render() {
		const { crafts, toggleCheckbox } = this.props;
		return (
			<Wrapper>
				<Heading>To Be Invoiced Crafts</Heading>
				<CraftList >
					<SubHeadings>
						<SubHeading>Cut</SubHeading>
						<SubHeading>Sew</SubHeading>
					</SubHeadings>
					{crafts.map((craft) => {
						if (craft.type === "shoe") {
							return (
								<CraftItem key={craft.id}>
									<Shoe style={craft} width="5rem" />
									<Checkbox step="cut" id={craft.id} value={craft.cut} handleChange={() => { }} />
									<Checkbox step="sew" id={craft.id} value={craft.sew} handleChange={() => { }} />
									<Button step="completed" id={craft.id} handleChange={toggleCheckbox}>Revert</Button>
								</CraftItem>);
						}
					})}
				</CraftList>
				<Center >
					<StyledButton onClick={() => navigate("/invoice")}>Create Invoice</StyledButton>
				</Center>
			</Wrapper>
		);
	}
}
