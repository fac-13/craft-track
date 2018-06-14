import React from "react";
import { render, prettyDOM } from "react-testing-library";
import About from "./about";

test("Test Landing component", () => {
	const { container } = render(<About />);
	expect(prettyDOM(container).includes("Welcome to Craft Track!")).toBeTruthy();
});
