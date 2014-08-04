var http = require('http')
var url = require('url')

function start() {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname
		response.writeHead(200,'{"Content-Type":"text/plain"}')
		response.write("Hello World" + pathname)
		response.end()
	}
	http.createServer(onRequest).listen(8888)
}

exports.start = start