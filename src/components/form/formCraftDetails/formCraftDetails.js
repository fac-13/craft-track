import React, { Fragment } from "react";
import DropDownField from "../../dropDownField/dropDownField";
import Label from "../../styled/label/label";

// For each property of <Form /> state.details when type is shoe,
// A configuration for how to render a drop down select fields
// with correct label text and select options
const dropDownConfig = {
	colourStitching: {
		labelText: "stitching colour",
		optionsArray: ["white", "cream", "black", "navy", "red"],
	},
	colourFront: {
		labelText: "colour of leather: front",
		optionsArray: ["white", "cream", "black", "navy", "red"],
	},
	colourBack: {
		labelText: "colour of leather: back",
		optionsArray: ["white", "cream", "black", "navy", "red"],
	},
	shoeSize: {
		labelText: "shoe size",
		optionsArray: Array.from({ length: 11 }, (_, i) => 35 + i),
	},
	quantity: {
		labelText: "quantity",
		optionsArray: Array.from({ length: 20 }, (_, i) => 1 + i),
	},
};

// When shoe is selected 5 drop down fields are generated
// When workshop is selected a single text input field is generated
const FormCraftDetails = ({ type, handleChange, details }) => {
	return (
		<Fragment>
			{
				type === "shoe" &&
				Object.entries(details).map(([key, value]) => {
					return <DropDownField key={key} id={key} value={value} handleChange={handleChange} {...dropDownConfig[key]} />;
				})
			}
			{
				type === "workshop" &&
				<Fragment>
					<Label htmlFor="title">title</Label>
					<input id="title" type="text" value={details.title} onChange={handleChange} />
				</Fragment>
			}

		</Fragment>
	);
};

export default FormCraftDetails;