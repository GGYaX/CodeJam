var util = require('./utils.js');

util.readFileByLine('text.in', function(err, data) {
	if(err) util.logger('err: ' + err);
	else {
		for(var i = 0; i < data.length; i ++) {
			data[i] += '####hahahah';
		}
		util.writeFileByLine('text.out', data, function(err) {
			if(err) util.logger('err : ' + err);
		});
	}
});