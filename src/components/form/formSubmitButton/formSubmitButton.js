import React from "react";
import icon__tick from "../../../../public/assets/icon__tick.svg";

const FormSubmitButton = ({ handleClick }) => <button onClick={ handleClick }><img className="icon-width" src={icon__tick} alt="tick" /></button>;

export default FormSubmitButton;