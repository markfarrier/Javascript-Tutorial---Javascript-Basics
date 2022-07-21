// Arrays, Functions and Objects
// expressions - another way to define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries

// function definition/declaration
function addValues(num1, num2) {
	return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
// function expression
const add = function (num1, num2) {
	return num1 + num2;
};

// const thirdValue = add(5, 6); // using anonymous function expression

const values = [firstValue, secondValue, add(5, 6)];
console.log(values);

const multiply = (num1, num2) => num1 * num2; // arrow function

// exports.nameOfMethod = function(){
// }
