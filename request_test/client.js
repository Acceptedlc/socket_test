var http = require("http");

var options = {
	hostname: "192.168.101.221",
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
		console.error(err.message);
	});
	req.end();
}

for(let i = 0; i < 2000; i++) {
	sendRequest();
}
