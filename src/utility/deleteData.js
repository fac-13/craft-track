export default (url) => {
	return fetch(url, {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		method: "DELETE",
	})
		.then(response => {
			if (!response.ok) {
				throw Error(`Error with the request! ${response.statusText} `);
			}
			return response.json();
		});
};