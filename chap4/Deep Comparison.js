function deepEqual(x, y)
	if(x === y) 
		return true;

	if(x == null || typeof x != "object") || (y == null || typeof y != "object") {
		return false;
	}


	var Xprop = 0, Yprop = 0;

	for (var prop in x) {
		Xprop += 1;
		}
	for (var prop in y) {
		Yprop += 1;
		if(!prop in x) || !deepEqual(x[prop], y[prop]) {
			return false;
		}
	}
		return Xprop == Yprop;
	}