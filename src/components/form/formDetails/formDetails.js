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
				<input type="button" onClick={handleSub} value="-" />
				{/* TODO pulse animate number change */}
				<input id={id} type="number" value={quantity} />
				<input type="button" onClick={handleAdd} value="+" />
			</FlexRowDiv>
		</Fragment>
	);
};

const FormDetails = ({ formData, handleSub, handleAdd, handleChange }) => {
	const { other } = formData;
	const dataObj = { ...formData };
	delete dataObj.other;
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

			<Label htmlFor="otherDescription" >other description</Label>
			<input
				id="otherDescription"
				type="text"
				value={other.description}
				onChange={handleChange}
			/>
			<Incrementor
				id={"otherQuantity"}
				quantity={other.quantity}
				handleSub={handleSub}
				handleAdd={handleAdd}
			/>
		</Fragment>
	);
};

export default FormDetails;