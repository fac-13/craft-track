import React, { Fragment } from "react";

const DropDownField = ({ title, optionsArray, selected, handleChange}) => (
	<Fragment>
		<label>{title}</label>
		<select onChange={handleChange} value={selected}>
			{
				optionsArray.map((optText) => (
					<option key={optText} value={optText} >{optText}</option>
				))
			}
		</select>
	</Fragment>
);

export default DropDownField;