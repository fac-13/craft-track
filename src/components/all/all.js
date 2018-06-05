import React from "react";
import styled from "styled-components";
import Shoe from "../styled/shoe/shoe";
import Wrapper from "../styled/wrapper/wrapper";
import Heading from "../styled/heading/heading";
import icon__scissor from "../../../public/assets/icon__scissor.svg";
import icon__plus from "../../../public/assets/icon__plus.svg";

const CraftList = styled.ul.attrs({
	className: "list pl0 flex flex-wrap"
}) `
margin: 0;
`;

const CraftItem = styled.li.attrs({
	className: "w-30"
}) ``;

const Plus = styled.button.attrs({
	className: "fixed bottom-0 z-2"
}) `
	left: 50%;
	transform: translateX(-50%);
`;

const All = ({ crafts, changePage }) => (
	<React.Fragment>
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
			<Plus onClick={(e) => changePage(e, "form")}>
				<img className="icon-width" src={icon__plus} alt="add craft" />
			</Plus>
		</Wrapper>
	</React.Fragment >
);

export default All;
