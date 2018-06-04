import React, { Fragment } from "react";
import DropDownField from "../../dropDownField/dropDownField";

const dropDownProps = {
	title: "stitching color",
	optionsArray: ["blue", "caramel"],
};

const FormCraftDetails = ({ type, handleChange, details: { stitchingColour } }) => (
	<Fragment>
		{
			type === "shoe" && <DropDownField selected={stitchingColour} handleChange={handleChange} {...dropDownProps} />
		}
		
	</Fragment>
);

export default FormCraftDetails;