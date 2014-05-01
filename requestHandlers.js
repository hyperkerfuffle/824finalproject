var querystring = require("querystring");
var exec = require("child_process").exec;
var fs = require("fs");
function sleep (milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}

function start(response) {
    console.log("Request handler start was called");
response.writeHead(200, {"Content-Type": "text/html"});
fs.readFile("./file-api-demo/text.html", function(error, data) {
      response.writeHead(200, {"Content-Type": "text/html"});
      console.log(error);
      console.log(data);
      //response.write(error)
      response.write(data);
      response.end();
  });
}

function upload(response, postData) {
    console.log("Request handler upload was called")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("hello upload");
    response.write(querystring.parse(postData).text);
    response.end();

}

exports.start = start;
exports.upload = upload;
