import React from "react";
import { render } from "react-testing-library";
import Title from "./title";

test("Test title component", () => {
	const { getByText } = render(<Title>hello, world</Title>);
	const htmlElement = getByText("hello, world");
	expect(htmlElement.tagName).toBe("H1");
});

