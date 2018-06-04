import React, { Fragment } from "react";

const DropDownField = ({ title, optionsArray, handleChange, name, value}) => (
	<Fragment>
		<label id={name}>{title}</label>
		<select htmlFor={name} onChange={handleChange} value={value}>
			{
				optionsArray.map((optText) => (
					<option key={optText} value={optText} >{optText}</option>
				))
			}
		</select>
	</Fragment>
);

export default DropDownField;