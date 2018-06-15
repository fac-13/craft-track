import styled from "styled-components";

const Label = styled.label.attrs({
})`
  font-family: roboto;
  font-weight: 300;
  text-transform: uppercase;
  width: 100%;
  display: block;
  display: ${props => props.hidden ? "none" : "block"};
  font-size: .9rem;
  letter-spacing: .1rem;
`;

export default Label;