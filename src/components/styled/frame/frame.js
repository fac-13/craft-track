import styled from "styled-components";

const Frame = styled.div.attrs({
	className: "fixed left-0 right-0 bg-light-gray"
}) `
	width: 100%;
	height: 8rem;
	transform: skewY(-5deg);
${ props => props.position}: -5rem;
	z-index: 1;
`;

export default Frame;