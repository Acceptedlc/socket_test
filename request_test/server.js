var http = require("http");


var server=new http.Server();

server.on("request", function (req, res) {
	console.log("req in");
	setTimeout(function () {
		res.writeHead(200, {"content-type": "text/plain"});
		res.write("hello world");
		res.end();
	}, 1000 * 10000);

});

server.on("clientError", function (err) {
	console.log(err)
})

server.listen(3000);
