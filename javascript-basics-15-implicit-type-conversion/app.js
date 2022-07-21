// Implicit Type Conversion

const name = 'john';
const lastName = 'jordan';
const fullName = name + ' ' + lastName;
console.log(fullName);

const number = 4;
const number2 = 10;
const result = number + number2;
console.log(result);

const value = name - lastName;
console.log(value); // not a number - cannot implicitly convert name into a number (required for the subtraction operation)

let number3 = 10;
let number4 = 23;
// imagine this happens way later in the code - such as 100 lines later (where you forget the type)
number4 = '23'; // looks innocent, as 23 is a number, but is set as a string
const result2 = number3 + number4; // javascript does an implicit type conversion - in this case converting number to string (addition operator allows for strings)
console.log(result2); // outputs a 1023 - the number 10 converted to string, and then the 23 is concatenated onto the 10

const randomNumber = 13;
document.querySelector('.form').addEventListener('submit', function (e) {
	e.preventDefault();
	let value = document.getElementById('amount').value;
	value = parseInt(value); // value returned above is a string, so will have a similar error as above unless it is converted to string
	console.log('Input Value Type');
	console.log(value);
	console.log('Sum of Two Values');
	console.log(randomNumber + value);
});
