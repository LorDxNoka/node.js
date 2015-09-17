function start () {
	console.log("Requset handler 'start' was called.");

	function sleep (milliseconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliseconds);
	}

	sleep(10000);
	return "Hello start";
}
function upload () {
	console.log("Requset handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;