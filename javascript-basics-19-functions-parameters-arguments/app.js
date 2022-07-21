// Arrays, Functions and Objects
// params - when declare/define
// placeholders, local vars
// arguments - when invoke/call/run
// use vars/values, multiple params, undefined

const bob = 'Bob';
const susy = 'Susy';
const anna = 'Anna';

function hello(name, second) {
	console.log(second);
	// logic
	console.log('Hello there ' + name);
}

// greet bob
hello(4);
// greet anna
hello(anna, 'Bob'); // if function isn't looking for second parameter, it just takes the first
// greet susy
hello('Susy');
