import React, { Fragment } from "react";
import DropDownField from "../../dropDownField/dropDownField";

const Shoe = () => <h3>Shoe</h3>;
const Scissor = () => <h3>Scissor</h3>;

const dropDownProps = {
	title: "Type",
	optionsArray: ["shoe", "Workshop"],
};

const FormHead = ({ type = "shoe" }) => (
	<Fragment>
		{type === "shoe" && <Shoe />}
		{type === "scissor" && <Scissor />}
		<DropDownField {...dropDownProps}  />
	</Fragment>
);

export default FormHead;