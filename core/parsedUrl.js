var http = require("http");
var url = require("url");

server = http.createServer(handleRequest);


function handleRequest(req, res) {
    console.log(JSON.stringify(req.headers));
    console.log("res-headers-",JSON.stringify(res.headers));
}

server.listen(3000, console.log("server started"));