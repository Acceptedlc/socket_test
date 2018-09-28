var request = require("request-promise");

let uri = "http://192.168.101.221:3000";

for(let i = 0; i < 20000; i++){
	request(uri).then(data => console.log(data))
}