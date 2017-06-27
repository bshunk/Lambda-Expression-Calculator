console.log("Ahoy, Captain!");

// Create a function that multiplies two numbers passed in as arguments. Return the product.

// document.getElementById("add-color").addEventListener("click", function() {
// 	piggie.classList.toggle("blue");
// 	console.log(piggie, piggie.classList)
// });

var mathOperations = (function(callback) { 

	document.getElementById("mulBtn").addEventListener("click", function() {
		let multiply = function (firstNum, secondNum) {
			return firstNum * secondNum;
			var product = firstNum * secondNum; 
			console.log(product);
		}
	});

	// Create a function that adds two numbers passed in as arguments. Return the sum.

	document.getElementById("addBtn").addEventListener("click", addition);

	var addition = function (firstNum, secondNum) {
	    return firstNum + secondNum;
	    console.log(addition);
	};

	// Create a function that subtracts two numbers passed in as arguments. Return the difference.

	document.getElementById("subBtn").addEventListener("click", subtraction);

	var subtraction = function (firstNum, secondNum) {
	    return firstNum - secondNum;
	    console.log(subtraction);
	};

	// Create a function that divides two numbers passed in as arguments. Return the quotient.

	document.getElementById("divBtn").addEventListener("click", division);

	var division = function (firstNum, secondNum) {
	    return firstNum / secondNum;
	    console.log(division);
	};

}(mathOperations || {}));

// Create a function that accepts three arguments.
    // 1. First number
    // 2. Second number
    // 3. A function that performs an operation on them

// Return the value of the operation.

