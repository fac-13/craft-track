import React, { Fragment } from "react";

const DropDownField = ({ title, optionsArray, handleChange, name, value}) => (
	<Fragment>
		<label htmlFor={name}>{title}</label>
		<select id={name} onChange={handleChange} value={value}>
			{
				optionsArray.map((optText) => (
					<option key={optText} value={optText} >{optText}</option>
				))
			}
		</select>
	</Fragment>
);

export default DropDownField;