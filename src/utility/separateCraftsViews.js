export default (crafts) => {
	return crafts.reduce((allCrafts, currentCraft) => {
		currentCraft.completed
			? allCrafts.completedCrafts.push(currentCraft)
			: allCrafts.todoCrafts.push(currentCraft);
		return allCrafts;
	}, { todoCrafts: [], completedCrafts: [] });
};