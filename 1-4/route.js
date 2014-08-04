function route(handle,pathname){
	// value是否为hadle内的函数
	if (typeof handle[pathname] === 'function') {
		handle[pathname]()
	} else {
		console.log("No request handler found for " + pathname)
	}
}

exports.route = route