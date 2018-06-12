export default (crafts) => {
	const craftsCopy = [...crafts];
	return craftsCopy.reduce((allCrafts, currentCraft) => {
		currentCraft.completed
			? allCrafts.completedCrafts.push(currentCraft)
			: allCrafts.todoCrafts.push(currentCraft);
		return allCrafts;
	}, { todoCrafts: [], completedCrafts:[] });
};