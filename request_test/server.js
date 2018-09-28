var http = require("http");
http.createServer(function (req, res) {
	console.log("req in");
	setTimeout(function () {
		res.writeHead(200, {"content-type": "text/plain"});
		res.write("hello world");
		res.end();
	}, 1000 * 10);

}).listen(3000);
