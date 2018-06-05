import React from "react";
import styled from "styled-components";
import Shoe from "../styled/shoe/shoe";
import Wrapper from "../styled/wrapper/wrapper";
import Heading from "../styled/heading/heading";
import icon__scissor from "../../../public/assets/icon__scissor.svg";
import Icon from "../styled/icon/icon";

const CraftList = styled.ul.attrs({
	className: "list pl0 flex flex-wrap"
}) `
margin: 0;
`;

const CraftItem = styled.li.attrs({
	className: "w-30"
}) ``;

const Center = styled.div.attrs({
	className: "fixed bottom-0 z-2"
}) `
	left: 50%;
	transform: translateX(-50%);
`;

const All = ({ crafts, changePage }) => (
	<Wrapper>
		<Heading>All crafts</Heading>
		<CraftList >
			{crafts.map((craft) => {
				return (
					<CraftItem key={craft.id}>
						{craft.type === "shoe" && <Shoe style={craft.details} width="100%" />}
						{craft.type === "workshop" && <img className="w-100" src={icon__scissor} alt="workshop" />}
					</CraftItem>
				);
			})}

		</CraftList>
		<Center >
			<Icon changePage={(e) => changePage(e, "form")} width="7rem" iconType="plus" />
		</Center>
	</Wrapper>
);

export default All;
