import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
	className: "fixed left-0 right-0 bg-light-gray"
}) `
	width: 100%;
	height: 10rem;
	transform: skewY(-5deg);
	top: -5rem;
	z-index: -100;
`;

const Header = () => (
	<Wrapper>
	</Wrapper>
);

export default Header;
