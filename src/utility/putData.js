export default (url, data) => {
	return fetch(url, {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		method: "PUT",
		body: JSON.stringify(data)
	})
		.then(response => {
			if (!response.ok) {
				throw Error(`Error with the request! ${response.statusText} `);
			}
			return response.json();
		});
};