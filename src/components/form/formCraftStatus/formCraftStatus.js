import React, { Fragment } from "react";
import DropDownField from "../../dropDownField/dropDownField";

const fieldConfig = {
	complete: {
		labelText: "completed",
		optionsArray: ["yes", "no"],
		
	},
	dateCompleted: {
		labelText: "date completed",
		inputType: "date",
	},
	hoursWorked: {
		labelText: "hours worked",
		inputType: "number",
	},
	unitPrice: {
		labelText: "earned",
		inputType: "number",
	},
};

const FormCraftStatus = ({ status, handleChange }) => {
	const { complete } = status;

	const statusCopy = { ...status };
	delete statusCopy.complete;

	return (
		<Fragment>
			<DropDownField id="complete" value={complete ? "yes" : "no"} handleChange={handleChange} {...fieldConfig["complete"]} />
			{
				complete &&
				Object.entries(statusCopy).map(([key, value]) => (
					<Fragment key={key}>
						<label htmlFor={key}>{fieldConfig[key].labelText}</label>
						<input id={key} type={fieldConfig[key].inputType} value={value} onChange={handleChange} />
					</Fragment>
				))
			}
		</Fragment>
	);
};

export default FormCraftStatus;