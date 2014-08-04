#index.js
注册handle的方法
#requestHandler.js
```javascipt
function start(reponse){
	// 实现上传文件的html
}
function uplod(response,request){
	var form = new fomiable.IcomingForm()
	form.parse(request,function(err,fields,files){
		fs.renameSync(files.upload.pth,"./tmp/test.png");
		response.writeHead(200, {"Content-Type": "text/html"});
    	response.write("received image:<br/>");
    	response.write("<img src='/show' />");
	})
}
function show(response){
	fs.readFile("/tmp/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}
}
```