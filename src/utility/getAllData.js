export default (url) => {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw Error(`Error with the request! ${response.statusText}`);
			}
			return response.json();
		});
};