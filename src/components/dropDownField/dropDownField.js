import React, { Fragment } from "react";

const DropDownField = ({ labelText, optionsArray, handleChange, id, value}) => (
	<Fragment>
		<label htmlFor={id}>{labelText}</label>
		<select id={id} onChange={handleChange} value={value}>
			{
				optionsArray.map((optText) => (
					<option key={optText} value={optText} >{optText}</option>
				))
			}
		</select>
	</Fragment>
);

export default DropDownField;