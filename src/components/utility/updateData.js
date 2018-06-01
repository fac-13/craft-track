const updateData = (oldData, updatedEntry) => {
	return oldData.reduce((acc, curr) => {
		updatedEntry.id == curr.id ? acc.push(updatedEntry) : acc.push(curr);
		return acc;
	}, []);
};

module.exports = updateData;