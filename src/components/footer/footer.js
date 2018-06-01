import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
	className: "absolute bottom-0 left-0 right-0 flex bg-moon-gray"
}) ``;

const FooterText = styled.p.attrs({
	className: "ttc w-30"
}) ``;

const Footer = () => (
	<Wrapper>
		<FooterText>
			Footer
		</FooterText>
	</Wrapper>
);

export default Footer;
