export default (url, data) => {
	return fetch(url, {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify(data)
	})
		.then(response => {
			if (!response.ok) {
				throw Error(`Error with the request! ${response.statusText} `);
			}
			console.log("response: ", response);
			return response.json();
		});
};