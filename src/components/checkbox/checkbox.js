import React, { Fragment } from "react";
import Label from "../styled/label/label";

const Checkbox = ({ step, handleChange, id, value }) => (
	<Fragment>
		<input type="checkbox" id={`${step}-${id}`} name={`${step}`} value={value} checked={value} onClick={() => handleChange(id, step)} />
		<Label htmlFor={id} hidden> {step} </Label>
	</Fragment>
);

export default Checkbox;