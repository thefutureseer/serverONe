var http = require(http);

function handleRequest(request, response) {
response.end("Hello user")
}

var server = http.createServer(handleRequest);

server.listening(3000, (handleRequest)=> {
console.log("listen on port 3000);
});
