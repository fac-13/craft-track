import React from "react";
import Shoe from "../styled/shoe/shoe";
import styled from "styled-components";
import Heading from "../styled/heading/heading";
import Wrapper from "../styled/wrapper/wrapper";
import ParagraphText from "../styled/paragraphText/paragraphText";
import icon__arrow from "../../../public/assets/icon__arrow.svg";

const shoeDetails = {
	colourStitching: "#777",
	quantity: 1,
	colourFront: "#ccc",
	colourBack: "#ccc",
};

const Center = styled.div.attrs({
	className: "flex flex-column items-center justify-around"
}) ``;

const Landing = ({ changePage }) => (<Wrapper>
	<Center>
		<Heading>Welcome to Craft Track!</Heading>
		<ParagraphText>This is an app to log the work you’ve done for Juta Shoes.</ParagraphText>
		<div className="ma4">
			<Shoe style={shoeDetails} />
		</div>
		<ParagraphText>Try me out and log your first craft!</ParagraphText>
	</Center>
	<button onClick={(e) => changePage(e, "all")}><img className="icon-width" src={icon__arrow} alt="arrow" /></button>

</Wrapper>);

export default Landing;
