import React from "react";
import { navigate } from "@reach/router";

import Shoe from "../styled/shoe/shoe";
import Heading from "../styled/heading/heading";
import Wrapper from "../styled/wrapper/wrapper";
import ParagraphText from "../styled/paragraphText/paragraphText";
import Icon from "../styled/icon/icon";

const shoeDetails = {
	colourStitching: "#777",
	quantity: 1,
	colourFront: "#ccc",
	colourBack: "#ccc",
};

const About = () => (
	<Wrapper>
		<Heading>Welcome to Craft Track!</Heading>
		<ParagraphText>This is an app to log the work you’ve done for Juta Shoes.</ParagraphText>
		<div className="ma4">
			<Shoe style={shoeDetails} />
		</div>
		<ParagraphText>Try me out and log your first craft!</ParagraphText>
		<Icon changePage={() =>  navigate("/all")}iconType="arrow" width="7rem" />
	</Wrapper>);

export default About;
