var http = require('http');
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    request.setEncoding("utf8");
    request.addListener("data", function(postDataChunk) {
	postData += postDataChunk;
	console.log("Received POST data chunk '"+
	postDataChunk + "'.");
    });
   request.addListener("end", function() {
	route(handle, pathname, response, postData);
   });
}
  inet = '18.111.122.190'
  port = 1337
  http.createServer(onRequest).listen(port, inet);
  console.log('Server running at http://'+ inet+ ':' + port);
}
exports.start = start;
