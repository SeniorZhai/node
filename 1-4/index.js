var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// key-value来进行路由
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);