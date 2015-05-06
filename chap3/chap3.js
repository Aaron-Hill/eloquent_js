//Chapter 3 code goes here
//Not Meant for Execution
//Link to Excercises: http://eloquentjavascript.net/03_functions.html

// 3.1 Minimum Solution

var min = function(num1, num2) {
	if (num1 === num2) {
		console.log("The numbers are equal");
	} else if (num1 > num2) {
		return num2;
	} else {
		return num1;
	}
} 

// 3.2 Recursion Solution

var isEven = function(number) { 
    if (number < 0) {
        return isEven(number+2);
    }
    else if (number===0) { 
     return true;   
    } else if (number===1) { 
        return false;
    } else {
        return isEven(number-2);
    }   
}


// 3.3 Bean Counting Solution Part 1

var countBs(strin){
	var count = 0;
	for (var i = 0; i < strin.length; i++) {
		if (strin[i] === "B") {
			count++;
		}
	}
}

// 3.3 Bean Counting Solution Part 2 

var countChar = function(strin, char){
	var count = 0;
	for (var i = 0; i < strin.length; i++) {
		if (strin[i] === char) {
			count++;
		}
	}
return count;
}