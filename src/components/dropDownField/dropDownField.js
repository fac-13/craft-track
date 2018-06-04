import React, { Fragment } from "react";

const DropDownField = ({ title, optionsArray}) => (
	<Fragment>
		<label>{title}</label>
		<select>
			{
				optionsArray.map((optText) => (
					<option key={optText} value={optText} >{optText}</option>
				))
			}
		</select>
	</Fragment>
);

export default DropDownField;