var http = require("http");

var options = {
	hostname: "localhost",
	port: 3000
};

function sendRequest() {
	var req = http.request(options, function (res) {
		res.setEncoding("utf-8");
		res.on("data", function (chunk) {
			console.log(chunk.toString())
		});
		console.log(res.statusCode);
	});
	req.on("error", function (err) {
		console.log(err.message);
	});
	req.end();
}

sendRequest();
sendRequest();
