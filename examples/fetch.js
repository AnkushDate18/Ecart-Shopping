fetch("/api")
	.then(function(response) {
		return response.json();
	})
	.then(function(body) {
		console.log(body);
	});
