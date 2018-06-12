import React from "react";
import styled from "styled-components";
import Shoe from "../styled/shoe/shoe";
import Wrapper from "../styled/wrapper/wrapper";
import Heading from "../styled/heading/heading";
import Icon from "../styled/icon/icon";
import deleteData from "../../utility/deleteData";

const CraftList = styled.ul.attrs({
	className: "list pl0"
})`
margin: 0;
width: 100%;
`;

const Button = styled.button`
	color: #777;
	font-size: .8rem;
	text-decoration: underline;
  font-family: 'Roboto Mono', monospace;
	border: none;
	background-color: transparent;
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


export default class All extends React.Component {
	state = {
		toggleComplete: false
	}

	removeEntry = (e, craftId) => {
		e.preventDefault();
		deleteData(`https://crafttrack-server.herokuapp.com/deleteItem/${craftId}`)
			.catch(e => console.log(e));
	}

	render() {
		const { crafts, changePage } = this.props;
		return (
			<Wrapper>
				<Heading>All crafts</Heading>
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
									<input type="checkbox" />
									<input type="checkbox" />
									<Button onClick={(e) => this.removeEntry(e, craft.id)}>Delete</Button>
								</CraftItem>);
						}
					})}
				</CraftList>
				<Center >
					<Icon changePage={(e) => changePage(e, "form")} width="7rem" iconType="plus" />
				</Center>
			</Wrapper>
		);
	}
}
