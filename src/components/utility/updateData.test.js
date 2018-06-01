import updateData from "./updateData";
import { oldData, updatedEntry, expected } from "./dummyData.js";
test("Test updateData function", () => {
	expect(updateData(oldData, updatedEntry)).toEqual(expected);
	expect(oldData).not.toEqual(expected);
});

