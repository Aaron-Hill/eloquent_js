//The sum of a Range

var range = function(start, end, inc) {
	if (start < end) {
			var foo = [];
			if(inc === undefined || isNaN(inc)) {
				for (var i = start; i <= end; i++) {
					foo.push(i);
				}
			} else {
				for (var i = start; i <= end; i += inc) {
					foo.push(i);
				}
			}
		} else if (end < start) {
		var foo = [];
			if(inc === undefined || isNaN(inc)) {
				for (var i = start; i >= end; i--) {
					foo.push(i);
				}
			} else {
				for (var i = start; i >= end; i -= inc) {
					foo.push(i);
				}
		}
		}
	  return foo;
}


var sum = function(bar) {
	var tote = 0;
	for(var i = 0; i < bar.length; i++) {
		tote += bar[i];
	}
return tote;
}










