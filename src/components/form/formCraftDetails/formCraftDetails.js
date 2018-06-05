import React, { Fragment } from "react";
import DropDownField from "../../dropDownField/dropDownField";

const dropDownConfig = {
	colourStitching: {
		labelText: "stitching colour",
		optionsArray: ["blue", "caramel"],
	},
	colourFront: {
		labelText: "colour of leather: front",
		optionsArray: ["blue", "caramel"],
	},
	colourBack: {
		labelText: "colour of leather: back",
		optionsArray: ["blue", "caramel"],
	},
	shoeSize: {
		labelText: "shoe size",
		optionsArray: Array.from({ length: 11 }, (_,i) => 35 + i),
	},
	quantity: {
		labelText: "quantity",
		optionsArray: Array.from({ length: 20 }, (_,i) => 1 + i),
	},
};


const FormCraftDetails = ({ type, handleChange, details }) => {

	const shoeDetails = {...details};
	delete shoeDetails.title;
	return (
		<Fragment>
			{
				type === "shoe" &&
				Object.entries(shoeDetails).map(([ key, value ]) => {
					return <DropDownField key={key} id={key} value={value} handleChange={handleChange} {...dropDownConfig[key]} />;
				})
			}
			{
				type === "workshop" &&
					<Fragment>
						<label htmlFor="title">title</label>
						<input id="title" type="text" value={details.title} onChange={handleChange} />
					</Fragment>
			}

		</Fragment>
	);
};

export default FormCraftDetails;