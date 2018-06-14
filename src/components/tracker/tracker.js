import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import Shoe from "../styled/shoe/shoe";
import Wrapper from "../styled/wrapper/wrapper";
import Heading from "../styled/heading/heading";
import Icon from "../styled/icon/icon";
import Checkbox from "../checkbox/checkbox";
import Button from "../button/button";
import deleteData from "../../utility/deleteData";
import putData from "../../utility/putData";
import { StyledButton } from "../styled/button/styledButton";


const CraftList = styled.ul.attrs({
	className: "list pl0"
})`
margin: 0;
width: 100%;
`;

const SubHeading = styled.span.attrs({

})`
	width: 100%;
	text-align: center;
	font-family: 'Roboto';
`;

const SubHeadings = styled.div.attrs({
	className: "flex justify-between"
})`
	padding-left: 6rem;
	/* width: 80%; */
	margin: 0 auto;
	padding-right: 4rem;
`;

const CraftItem = styled.li.attrs({
	className: "flex items-center justify-between"
})`
	width: 100%;
	height: 5rem;
	margin: 0 auto;
`;

const Center = styled.div.attrs({
	className: "fixed bottom-0 z-2"
})`
	left: 50%;
	transform: translateX(-50%);
`;

export default class Tracker extends React.Component {
	state = {
		toggleComplete: false
	}

	removeEntry = (e, craftId) => {
		e.preventDefault();
		deleteData(`https://crafttrack-server.herokuapp.com/deleteItem/${craftId}`)
			.then(() => this.props.removeDeletedEntry(craftId))
			.catch(e => console.log(e));
	}

	componentWillUnmount() {
		if (this.props.updatedCrafts.length < 1) return;
		const params = this.props.updatedCrafts.map((craft) => {
			let { id, colourStitching, colourFront, colourBack, shoeSize, cut, sew, completed, type } = craft;

			return {
				Item: {
					"id": { N: id },
					"type": { S: type },
					"colourStitching": { S: colourStitching },
					"colourFront": { S: colourFront },
					"colourBack": { S: colourBack },
					"shoeSize": { N: shoeSize },
					"cut": { BOOL: Boolean(cut) },
					"sew": { BOOL: Boolean(sew) },
					"completed": { BOOL: Boolean(completed) },
				}
			};
		});
		putData("https://crafttrack-server.herokuapp.com/putItem", params)
			.catch(err => console.log(err.message));
	}

	render() {
		const { crafts, toggleCheckbox } = this.props;
		return (
			<Wrapper>
				<Heading>Track Crafts</Heading>
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
									<Checkbox step="cut" id={craft.id} value={craft.cut} handleChange={toggleCheckbox} />
									<Checkbox step="sew" id={craft.id} value={craft.sew} handleChange={toggleCheckbox} />
									<Button step="completed" id={craft.id} handleChange={toggleCheckbox}>Done</Button>
									<StyledButton onClick={(e) => this.removeEntry(e, craft.id)}>Remove</StyledButton>
								</CraftItem>);
						}
					})}
				</CraftList>
				<Center >
					<Icon changePage={() => navigate("/log-craft")} width="7rem" iconType="plus" />
				</Center>
			</Wrapper>
		);
	}
}
