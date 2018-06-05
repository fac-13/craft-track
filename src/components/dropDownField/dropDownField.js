import React, { Fragment } from "react";
import Label from "../styled/label/label";
import Select from "../styled/select/select";

const DropDownField = ({ labelText, optionsArray, handleChange, id, value }) => (
	<Fragment>
		<Label htmlFor={id}>{labelText}</Label>
		<Select id={id} onChange={handleChange} value={value}>
			{
				optionsArray.map((optText) => (
					<option key={optText} value={optText} >{optText}</option>
				))
			}
		</Select>
	</Fragment>
);

export default DropDownField;