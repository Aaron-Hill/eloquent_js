


//Array to List


function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--)
    list = {value: arr[i], rest: list};
  return list;
}


var hi = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
}

function listToArray(list) {
	var arr = [];
	for (var node = list; node; node = node.rest) {
		arr.push(node.value);
	}
	return arr;
}

listToArray(hi)



function prepend(element, list) {
	return {value: element, rest: list}

}

function nth(list, number) {
	if (!list) {
		return undefined;
	}
	else if(number == 0) {
		return list.value;
	} else {
		return nth(list.rest, n - 1);
	}
}