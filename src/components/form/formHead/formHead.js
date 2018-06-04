import React, { Fragment } from "react";
import DropDownField from "../../dropDownField/dropDownField";

const Shoe = () => <h3>shoe</h3>;
const Scissor = () => <h3>scissor</h3>;

const dropDownProps = {
	title: "type",
	optionsArray: ["shoe", "workshop"],
};

const FormHead = ({ type = "shoe", handleChange }) => (
	<Fragment>
		{type === "shoe" && <Shoe />}
		{type === "workshop" && <Scissor />}
		<DropDownField type={type} handleChange={handleChange} {...dropDownProps} />
	</Fragment>
);

export default FormHead;