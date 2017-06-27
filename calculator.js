console.log("Ahoy, Captain!");

// Create a function that multiplies two numbers passed in as arguments. Return the product.

document.getElementById("mulBtn").addEventListener("click", multiply);

var multiply = function (firstNum, secondNum) {
    return firstNum * secondNum;
};
var product = multiply("firstNum", "secondNum");
document.write("Product= ", product)

// Create a function that adds two numbers passed in as arguments. Return the sum.

var addition = function (firstNum, secondNum) {
	document.getElementById("addBtn").addEventListener("click", addition);
    return firstNum + secondNum;
    console.log(addition);
};

// Create a function that subtracts two numbers passed in as arguments. Return the difference.

var subtraction = function (firstNum, secondNum) {
	document.getElementById("subBtn").addEventListener("click", subtraction);
    return firstNum - secondNum;
    console.log(subtraction);
};

// Create a function that divides two numbers passed in as arguments. Return the quotient.

var division = function (firstNum, secondNum) {
	document.getElementById("divBtn").addEventListener("click", division);
    return firstNum / secondNum;
    console.log(division);
};

// Create a function that accepts three arguments.
    // 1. First number
    // 2. Second number
    // 3. A function that performs an operation on them
// Return the value of the operation.
