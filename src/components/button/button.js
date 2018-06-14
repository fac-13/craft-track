import React from "react";
import { StyledButton } from "../styled/button/styledButton";

const Button = ({ step, handleChange, id, children }) => (
	<StyledButton type="button" id={`${step}-${id}`} onClick={() => handleChange(id, step)} >
		{children}
	</StyledButton>
);

export default Button;