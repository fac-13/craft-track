import LogCraftForm from "./logCraftForm";
import React from "react";
import { renderIntoDocument, prettyDOM } from "react-testing-library";

test("test that I am on the log craft page", () => {

	const { container, getByLabelText } = renderIntoDocument(<LogCraftForm getUpdatedData={() => {}} />);
	const hasTitle = prettyDOM(container).includes("Log Craft");
	expect(hasTitle).toBeTruthy();
  
	const selectFieldValues = [...container.querySelectorAll("select")].map((el) => el.value);
	// console.log(selectFieldValues);
  
	const stitchColorSelect = getByLabelText("stitching colour");
	// console.log([...stitchColorSelect.children].map((el) => el.value));
  
	// const stitchColorOption = stitchColorSelect.children;
	// const stitchColorWhite = stitchColorOption.item(0);
	// fireEvent.click(stitchColorWhite);
  
	// console.log(stitchColorOption);
	// Simulate.change(stitchColorSelect, { target: { value: "white"}});
  

});
