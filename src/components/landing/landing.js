import React from "react";
import styled from "styled-components";
import Shoe from "../shoe/shoe";
import icon__arrow from "../../../public/assets/icon__arrow.svg"

const Wrapper = styled.div.attrs({
	className: "flex flex-column items-center justify-around"
}) `
	min-height: 80vh;
	margin: 10vh 5rem;
`;

const shoeDetails = {
	colourStitching: "#777",
	quantity: 1,
	colourFront: "#ccc",
	colourBack: "#ccc",
};

const Landing = () => (
	<React.Fragment>
		<Wrapper>
				<h1 className="sg-heading">Welcome to Craft Track!</h1>
				<p className="sg-text">This is an app to log the work you’ve done for Juta Shoes.</p>
				<div className="ma4">
					<Shoe style={shoeDetails} />
				</div>
				<p className="sg-text">Try me out and log your first craft!</p>
				<img className="icon-width" src={icon__arrow} alt="arrow" />
		</Wrapper>
	</React.Fragment>
);

export default Landing;
