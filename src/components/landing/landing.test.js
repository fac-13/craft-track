import React from "react";
import { render, prettyDOM } from "react-testing-library";
import Landing from "./landing";

test("Test Landing component", () => {
	const { container } = render(<Landing />);
	console.log("container", prettyDOM(container));
	expect(prettyDOM(container).includes("Welcome to Craft Track!")).toBeTruthy();
});
