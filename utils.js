var fs = require('fs');
var util = require('util');

var logger = function(s) {
	util.log(s);
}

var readFileByLine = function (filename, callback) {
	fs.readFile(filename, function (err, data) {
		if(err) callback(err);
		else {
			console.log(data.toString());
			var toReturn = [];
			var lineBegins = true;
			for(var i = 0; i < data.toString().length ; i ++) {
				if(lineBegins === true) {
					var line = '';
					lineBegins = false;
				}
				if(data.toString()[i] === '\n') {
					toReturn.push(line);
					lineBegins = true;
				} else {
					line += data.toString()[i];
				}
			}
			callback(undefined, toReturn);
		}
	});
}

var writeFileByLine = function (filename, data, callback) {
	if(!util.isArray(data)) {
		callback(new Error());
	} else {
		var toWrite = '';
		for(var i = 0; i < data.length; i ++) {
			toWrite += data[i] + '\n';
		}
		fs.writeFile(filename, toWrite, function(err) {
			if(err) callback(err);
			else callback(undefined);
		})
	}
}

exports.readFileByLine = readFileByLine;
exports.logger = logger;
exports.writeFileByLine = writeFileByLine;