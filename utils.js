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
			for(var i = 0; i < data.toString().length ; i ++) {
				if(data.toString()[i] === '\n') {
					toReturn.push(line);
					line = '';
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
		toWrite = toWrite.substring(0, toWrite.length - 1);
		fs.writeFile(filename, toWrite, function(err) {
			if(err) callback(err);
			else callback(undefined);
		})
	}
}

exports.readFileByLine = readFileByLine;
exports.logger = logger;
exports.writeFileByLine = writeFileByLine;