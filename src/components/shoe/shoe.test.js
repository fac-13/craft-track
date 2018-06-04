import React from "react";
import { render, prettyDOM } from "react-testing-library";
import Shoe from "./shoe";

const data = {
		"colourStitching": "#FFFFFF",
		"colourFront": "red",
		"colourBack": "caramel",
		"shoeSize": "36",
		"quantity": "1"
};

test("Test Shoe component - with data passed in", () => {
  const {container} = render(<Shoe style={data}></Shoe>);
  expect(prettyDOM(container).includes("red")).toBeTruthy();
  expect(prettyDOM(container).includes("1")).toBeTruthy();
  expect(prettyDOM(container).includes("caramel")).toBeTruthy();
  expect(prettyDOM(container).includes("#FFFFFF")).toBeTruthy();
});
