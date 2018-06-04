import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
	className: "absolute top-0 bottom-0 left-0 right-0 flex justify-center flex-column bg-near-white"
}) ``;

const LandingText = styled.p.attrs({
	className: "ttc w-30"
}) ``;

const Landing = () => (
	<Wrapper>
		<LandingText>
			Welcome to Craft Track!
		</LandingText>
	</Wrapper>
);

export default Landing;
