// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// String
const text = 'some text';

// Number
const number = 45;

// Boolean
let value1 = true;
let value2 = false;

// Null
const result = null;

// Undefined
let name;

// Symbol(ES6)
console.log(typeof text); // returns string
console.log(typeof true); // returns boolean
console.log(typeof number); // returns number
console.log(typeof value1); // returns boolean
console.log(typeof value2); // returns boolean
console.log(typeof result); // returns an object, even though it should be null
// unfortunately, this hasn't been fixed, because there's too much riding on javascript treating it as an object
console.log(typeof name); // returns undefined
