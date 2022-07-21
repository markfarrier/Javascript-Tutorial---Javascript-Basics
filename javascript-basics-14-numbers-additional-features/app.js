// Numbers
// +=, -=, /=, *=, ++, --, %
// Modulus (%) operator returns the remainder after integer division

let number = 40;
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;
number++;
number--;
number--;

console.log(number);

//pizza example
const slices = 10;
const children = 3;
// const amount = slices / children;
const amount = slices % children; // outputs how many slices will be left over after distributing evenly - i.e. the remainder of the division

console.log(amount);

const random = 4 + 6 + 10 * 10;
const random2 = (4 + 6 + 10) * 10;

console.log(random);
console.log(random2);
