// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if (Array.isArray(obj)) {

		var arr = [];
		for (var i=0; i<obj.length; i++) {
			arr.push(stringifyJSON(obj[i]));
		}
		return '[' + arr.join(',') + ']';

	} else if (typeof obj === 'object') {

		if (obj === null) { return String(obj); }
  	var res = [];
		for (var key in obj) {
			if (typeof obj[key] === 'function' || obj[key] === undefined) { continue; }
			res.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
		}
		return '{' + res.join(',') + '}';

  } else {
  	if (typeof obj === 'string') {
  		return '"' + obj + '"';
  	}
  	return String(obj);
  }
};
