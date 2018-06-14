import React from "react";
import { render, prettyDOM } from "react-testing-library";
import Todo from "./todo";
import { oldData } from "../../utility/dummyData";

test("Test Landing component", () => {
	const { container } = render(<Todo crafts={oldData} />);
	expect(prettyDOM(container).includes("icon__shoe")).toBeTruthy();

});
