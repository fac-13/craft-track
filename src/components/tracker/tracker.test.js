import React from "react";
import { render, prettyDOM } from "react-testing-library";
import Tracker from "./tracker";
import { oldData } from "../../utility/dummyData";

test("Test Landing component", () => {
	const { container } = render(<Tracker crafts={oldData} />);
	expect(prettyDOM(container).includes("icon__shoe")).toBeTruthy();

});
