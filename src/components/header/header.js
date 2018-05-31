import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
	className: "z-1 absolute top-0 left-0 right-0 flex bg-moon-gray"
}) ``;

const HeaderText = styled.p.attrs({
	className: "w-30"
}) ``;

const Header = () => (
	<Wrapper>
		<HeaderText>
			Submit Craft
		</HeaderText>
	</Wrapper>
);

export default Header;
