import React, { Fragment } from "react";

const DropDownField = ({ title, optionsArray, type, handleChange}) => (
	<Fragment>
		<label>{title}</label>
		<select onChange={handleChange} value={type}>
			{
				optionsArray.map((optText) => (
					<option key={optText} value={optText} >{optText}</option>
				))
			}
		</select>
	</Fragment>
);

export default DropDownField;