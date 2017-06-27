console.log("Ahoy, Captain!");

// Create a function that multiplies two numbers passed in as arguments. Return the product.


// document.getElementById("add-color").addEventListener("click", function() {
// 	piggie.classList.toggle("blue");
// 	console.log(piggie, piggie.classList)
// });

var operations = (function(firstNum, secondNum) { 

	document.getElementById("mulBtn").addEventListener("click", function() {
		let multiply = function (callback) {
			return firstNum * secondNum;
			var product = firstNum * secondNum; 
			console.log("product", event.target);
		}
	});

	// Create a function that adds two numbers passed in as arguments. Return the sum.

	document.getElementById("addBtn").addEventListener("click", addition);

	var addition = function (callback) {
	    return firstNum + secondNum;
	    console.log(addition);
	};

	// Create a function that subtracts two numbers passed in as arguments. Return the difference.

	document.getElementById("subBtn").addEventListener("click", subtraction);

	var subtraction = function (callback) {
	    return firstNum - secondNum;
	    console.log(subtraction);
	};

	// Create a function that divides two numbers passed in as arguments. Return the quotient.

	document.getElementById("divBtn").addEventListener("click", division);

	var division = function (callback) {
	    return firstNum / secondNum;
	    console.log(division);
	};

}(operations || {}));

// Create a function that accepts three arguments.
    // 1. First number
    // 2. Second number
    // 3. A function that performs an operation on them
<<<<<<< HEAD
// Return the value of the operation.
=======
// Return the value of the operation.
>>>>>>> 80cf12b7ec038c1cf629ff603c427bcb81f0467d
