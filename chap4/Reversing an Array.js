//Reversing an Array

var reverseArray = function(arr) {
	var newArr = [];
	for (var i = (arr[arr.length - 1]); i >= arr[0]; i--) {
		newArr.push(i);
	}
	return newArr;
}



function reverseInPlace(arr){
    var times = Math.floor(arr.length/2);
    console.log(times);
    for (var i = 0; i <= times; i++){
        var last = arr.length-1-i;
        console.log(last);
        var holdit = arr[i];
        arr[i] = arr[last];
        arr[last] = holdit;
        console.log(arr);
        }
    return arr
}
console.log(reverseInPlace([3,55,"q","b", false]));


