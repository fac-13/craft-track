import React from "react";
import { render, prettyDOM } from "react-testing-library";
import All from "./all";
import { oldData } from "../../utility/dummyData";

test("Test Landing component", () => {
	const { container } = render(<All crafts={oldData} />);
	expect(prettyDOM(container).includes("icon__shoe")).toBeTruthy();

});
