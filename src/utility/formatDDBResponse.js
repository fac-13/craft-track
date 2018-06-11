export default (response) => {
	let data = response.responseData.Items;

	let formatted = data.map(object => {
		let entries = Object.entries(object);

		entries.forEach((entry) => {
			let key = entry[0];
			let value = entry[1];
			if (key === "id") {
				let formattedDate = (new Date(+value.N)).toLocaleString();
				object.date = formattedDate;
			}
			let newValue = Object.values(value)[0];
			object[key] = newValue;
		});

		return object;
	});

	return formatted;
};