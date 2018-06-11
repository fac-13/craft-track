import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.width || "10rem"};
`;

const Quantity = styled.span`
  position: absolute;
  right: 20%;
  top: 10%;
`;

const Shoe = ({ style: { colourStitching, colourFront, colourBack, quantity }, width }) => {
	return (
		<Wrapper width={width}>
			<svg viewBox="0 0 185 176"><g id="icon__shoe" transform="translate(-11 -4) " ><path d="M49.568 165.072l131.366-23.13-21.709-122.944L27.86 42.13l21.709 122.943zm-36-132.935L169.232 4.73l25.993 147.205-155.662 27.408L13.569 32.137z" id="shoe__frame" fill="#eee" fillRule="nonzero" /><path d="M34.82 118.604l83.6-52.087 11.101 33.258 46.99-17.985v44.177H23.85l10.969-7.363zm-15.083 7.363l4.113 7.363h156.317v-7.363" id="shoe__front" fill={colourFront} /><path d="M177.744 125.224V81.047l-49.457 15.032 8.635 29.145 2.467 9.04 42.011-1.677v-7.363h-3.656z" id="shoe__back" fill={colourBack} /><g id="shoe__outline" transform="translate(11.102 54.199)" fillRule="nonzero" fill={colourStitching}><path id="Path-4" d="M123.054 71.717l4-.273L107.108.98 0 68.218l2.187 3.485L104.85 7.391z" /><path id="Path-5" d="M171.577 68.157h4.113V24.385L116.2 39.118l.986 3.995 54.39-13.474z" /><path d="M0 71.612h16.454v-4.115H0v4.115zm32.909 0h16.454v-4.115H32.91v4.115zm32.909 0h16.454v-4.115H65.818v4.115zm32.908 0h16.455v-4.115H98.726v4.115zm32.91 0h16.454v-4.115h-16.455v4.115zm32.908 0h16.454v-4.115h-16.454v4.115z" id="Path-7" /><path id="Path-6" d="M4.114 77.364v-6.171H0v10.286h180.998V71.193h-4.113v6.171z" /></g></g></svg>
		</Wrapper>
	);
};

export default Shoe;