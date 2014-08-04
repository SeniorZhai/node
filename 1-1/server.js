// 请求注册了自带的http模块
var http = require('http')
// 创建服务并监听8888端口
http.createServer(function(request,response){
	// HTTP状态200和HTTP头
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World")
	// 响应完成
	response.end()
}).listen(8888)
console.log("Server has started,listen http://localhost:8888/");