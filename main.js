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

function solution() {
	util.readFileByLine('text.in', function(err, data) {
	if(err) util.logger('err: ' + err);
	else {
		// traitement
		var nbTestsCases = data[0];
		var toWrite = [];
		for(var i = 1; i < nbTestsCases; i ++) {
			var credit = data[i];
			var nbItem = data[i + 1];
			var items = data[i + 2].split(' ');
			var result = traitement(credit, nbItem, items);
			toWrite.push('Case #' + i + ': ' + (result.result ? result.result[0] + '' + result.result[1] : result.error));
		}
		util.writeFileByLine('text.out', toWrite);
	}
});
}

function traitement(credit, nbItem, items) {
	var position = 1;
	for(var i = 0; i < nbItem - 1; i ++) {
		for(var j = position; i < nbItem; i ++) {
			if((items[i] + items[j]) === credit) {
				return {'error': undefined, 'result' : [i, j]};
			}
		}
		position ++;
	}
	return {'error': new Error('no items found')};
}