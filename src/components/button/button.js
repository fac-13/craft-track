import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	color: #777;
	font-size: .8rem;
	text-decoration: underline;
  font-family: 'Roboto Mono', monospace;
	border: none;
	background-color: transparent;
`;

const Button = ({ step, handleChange, id, children}) => (
	<StyledButton type="button" id={`${step}-${id}`} onClick={() => handleChange(id, step)} >
		{children}
	</StyledButton>
);

export default Button;