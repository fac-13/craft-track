import React from "react";
import styled from "styled-components";

import Shoe from "../styled/shoe/shoe";
import icon__scissor from "../../../public/assets/icon__scissor.svg";
import icon__plus from "../../../public/assets/icon__plus.svg";

const CraftList = styled.ul.attrs({
	className: "list pl0 flex flex-wrap mh4"
}) `
margin-top: 5rem;
`;

const CraftItem = styled.li.attrs({
	className: "w-30 h4 mh1"
}) ``;

const Plus = styled.button.attrs({
	className: "fixed bottom-0 z-2"
}) `
	left: 50%;
	transform: translateX(-50%);
`;

const getShoeDetails = (shoeObj) => {
	return {
		colourStitching: shoeObj.details.colourStitching,
		colourFront: shoeObj.details.colourFront,
		colourBack: shoeObj.details.colourBack,
		quantity: shoeObj.details.quantity,
	};
};

const All = (props) => (
	<React.Fragment>
		<CraftList>
			{props.crafts.map((craft) => {

				return (
					<CraftItem key={craft.id}>
						{craft.type === "shoe" && <Shoe style={getShoeDetails(craft)} width="100%" />}
						{craft.type === "workshop" && <img className="icon-width" src={icon__scissor} alt="workshop" />}
					</CraftItem>
				);
			})}

		</CraftList>
		<Plus>
			{<img className="icon-width" src={icon__plus} alt="add craft" />}
		</Plus>
	</React.Fragment>
);

export default All;
