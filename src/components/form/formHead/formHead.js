import React, { Fragment } from "react";
import Shoe from "../../styled/shoe/shoe";

const FormHead = ({ type, style }) => (
	<Fragment>
		{type === "shoe" && <Shoe style={style} />}
	</Fragment>
);

export default FormHead;