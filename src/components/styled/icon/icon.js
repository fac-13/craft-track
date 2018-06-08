import styled from "styled-components";
import React from "react";
import icon__arrow from "../../../../public/assets/icon__arrow.svg";
import icon__cross from "../../../../public/assets/icon__cross.svg";
import icon__plus from "../../../../public/assets/icon__plus.svg";
import icon__tick from "../../../../public/assets/icon__tick.svg";

const Button = styled.button.attrs({
}) `
  border: none;
  background-color: transparent;
  border-radius: 0;
  width: ${ props => props.width};
outline: none;
`;

const Icon = ({ iconType, width, changePage }) => {
	const type = {
		arrow: icon__arrow,
		plus: icon__plus,
		tick: icon__tick,
		cross: icon__cross,
	}[iconType];
	return (
		<React.Fragment>
			<Button width={width} onClick={(e) => changePage(e)}>
				<img className="w-100" src={type} alt={iconType} />
			</Button>
		</React.Fragment>
	);
};

export default Icon;