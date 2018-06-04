import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
	className: "fixed left-0 right-0 bg-light-gray"
}) `
	width: 100%;
	height: 10rem;
	transform: skewY(-5deg);
	bottom: -5rem;
	z-index: -100;
`;

const Footer = () => (
	<Wrapper>
	</Wrapper>
);

export default Footer;
