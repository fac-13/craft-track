import React from "react";
import { navigate } from "@reach/router";

import Shoe from "../styled/shoe/shoe";
import Heading from "../styled/heading/heading";
import Wrapper from "../styled/wrapper/wrapper";
import ParagraphText from "../styled/paragraphText/paragraphText";
import Icon from "../styled/icon/icon";

import getRandomColor from "../../utility/getRandomColor";


class About extends React.Component {

	state = {
		details: {
			colourStitching: getRandomColor(),
			colourFront: getRandomColor(),
			colourBack: getRandomColor(),
		},
	}

	changeShoeColors = () => {
		this.setState({
			details: {
				colourStitching: getRandomColor(),
				colourFront: getRandomColor(),
				colourBack: getRandomColor(),
			}
		});
	}

	render () {
		const { details } = this.state;
		setTimeout(() => {
			this.changeShoeColors();
			
		}, 1500);
		return (
			<Wrapper>
				<Heading>Welcome to Craft Track!</Heading>
				<ParagraphText>This is an app to log the work you’ve done for Juta Shoes.</ParagraphText>
				<div className="ma4">
					<Shoe style={details} />
				</div>
				<ParagraphText>Try me out and log your first craft!</ParagraphText>
				<Icon changePage={() =>  navigate("/log-craft")}iconType="arrow" width="7rem" />
			</Wrapper>);
	}
} 

export default About;
