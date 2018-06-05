import React, { Fragment } from "react";
import DropDownField from "../../dropDownField/dropDownField";
import Shoe from "../../styled/shoe/shoe";
import icon__scissor from "../../../../public/assets/icon__scissor.svg";
import styled from "styled-components";

const Width = styled.div.attrs({
}) `
	width: 10rem;
`;

const Scissor = () => {
	return (
		<Width>
			<img className="w-100" src={icon__scissor} alt="workshop" />
		</Width>
	);
};

const dropDownProps = {
	title: "type",
	optionsArray: ["shoe", "workshop"],
};

const FormHead = ({ type, style, handleChange }) => (
	<Fragment>
		{type === "shoe" && <Shoe style={style} />}
		{type === "workshop" && <Scissor />}
		<DropDownField name="type" value={type} handleChange={handleChange} {...dropDownProps} />
	</Fragment>
);

export default FormHead;