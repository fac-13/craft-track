import React, { Fragment } from "react";
import DropDownField from "../../dropDownField/dropDownField";

const dropDownProps = {
	colourStitching: {
		title: "stitching colour",
		optionsArray: ["blue", "caramel"],
	},
	colourFront: {
		title: "colour of leather: front",
		optionsArray: ["blue", "caramel"],
	},
	colourBack: {
		title: "colour of leather: back",
		optionsArray: ["blue", "caramel"],
	},
	shoeSize: {
		title: "shoe size",
		optionsArray: Array.from({ length: 11 }, (_,i) => 35 + i),
	},
	quantity: {
		title: "quantity",
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
					return <DropDownField key={key} name={key} value={value} handleChange={handleChange} {...dropDownProps[key]} />;
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