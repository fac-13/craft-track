import React, { Fragment } from "react";
import Label from "../../styled/label/label";

import styled from "styled-components";
const FlexRowDiv = styled.div.attrs({
	className: "flex"
}) ``;

const Incrementor = ({ id, quantity, handleSub, handleAdd }) => {
	return (
		<Fragment>
			<Label htmlFor={id}>{id}</Label>
			<FlexRowDiv>
				<button type="button" onClick={handleSub} >➖</button>

				<input id={id} type="number" value={quantity} />
				<button type="button" onClick={handleAdd} >➕</button>
			</FlexRowDiv>
		</Fragment>
	);
};

const FormDetails = ({ formData, handleSub, handleAdd, handleChange }) => {
	const { otherDescription, otherQuantity } = formData;
	const dataObj = { ...formData };
	delete dataObj.other;
	delete dataObj.otherDescription;
	delete dataObj.otherQuantity;
	return (
		<Fragment>
			{
				Object.entries(dataObj).map(([labelText, quantity]) => {
					return (
						<Fragment key={labelText}>
							{/* <Label htmlFor={labelText}>{labelText}</Label> */}
							<Incrementor
								id={labelText}
								quantity={quantity}
								handleSub={handleSub}
								handleAdd={handleAdd}
							/>
						</Fragment>
					);
				})
			}

			<Label htmlFor="otherDescription" >otherDescription</Label>
			<input
				id="otherDescription"
				type="text"
				value={otherDescription}
				onChange={handleChange}
			/>
			<Incrementor
				id={"otherQuantity"}
				quantity={otherQuantity}
				handleSub={handleSub}
				handleAdd={handleAdd}
			/>
		</Fragment>
	);
};

export default FormDetails;