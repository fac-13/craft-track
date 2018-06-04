import React from "react";
import styled from "styled-components";

import Shoe from "../shoe/shoe";

const CraftList = styled.ul.attrs({
	className: "list pl0 flex flex-wrap mh4"
}) `
margin-top: 5rem;
`;

const CraftItem = styled.li.attrs({
	className: "w-30 h4 mh1"
}) ``;

const getShoeDetails = (shoeObj) => {
	return {
		colourStitching: shoeObj.details.colourStitching,
		colourFront: shoeObj.details.colourFront,
		colourBack: shoeObj.details.colourBack,
		quantity: shoeObj.details.quantity,
	};
};

const All = (props) => (
	<CraftList>
		{props.crafts.map((craft) => {

			return (
				<CraftItem key={craft.id}>
					{craft.type === "shoe" ? <Shoe style={getShoeDetails(craft)} width="100%" /> : craft.type}
				</CraftItem>
			);
		})}

	</CraftList>
);

export default All;
