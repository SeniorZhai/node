#Post请求

- index.js
    注册三个模块`server`处理数据建立服务，`router`处理路由，`requestHanders`处理数据
    ```javascript
    // 使用key-value设置处理方法
    var handle = {}
    handle["/"] = requestHandlers.start;
    handle["/start"] = requestHandlers.start;
    handle["/upload"] = requestHandlers.upload;
    ```
- server.js
    建立服务，监听数据请求
    ```javascript
    function start(route,handle){
        function onRequest(request,response) {
            var pathname = url.parse(request.url).pathname;
            var postData = ""
            request.setEncoding("utf8");
            request.addListener("data",function(postDataChunk){
                postData += postDataChunk
            })
            request.addListener("end",function(){
                route(handle, pathname, response, postData);
            })
        }

        http.createServer(onRequest).listen(8888);
  	    console.log("Server has started.");
    }
    
    exports.start = start;
    ```

- router.js
    处理路由
    ```javascript
    function route(handle,pathname,response,postData){
	    // value是否为hadle内的函数
	    if (typeof handle[pathname] === 'function') {
		    handle[pathname](response,postData)
	    } else {
		    console.log("No request handler found for " + pathname)
	    }
    }
    exports.route = route
    ```

- requestHandlers.js
    
    ```javascript
    function start(response,postData) {
        var body = '<html>' +
		'<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
    }
    
    function upload(response,postData){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("You've sent: " + postData);
        response.end();
    }

    exports.start = start;
    exports.upload = upload;
    ```