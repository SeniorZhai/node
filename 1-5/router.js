function route(handle,pathname,response,postData){
	// value是否为hadle内的函数
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response,postData)
	} else {
		console.log("No request handler found for " + pathname)
	}
}

exports.route = route