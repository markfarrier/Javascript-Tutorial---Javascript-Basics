// Loops
// repeatedly run a block of code while condition is true
// while loop
// TURN OFF AUTOSAVE

// const amount = 10; // this shouldn't be const, as then you can't decrement it
let amount = 10;

while (amount > 0) {
	console.log('I have ' + amount + "dollars and I'm going to the mall");
	amount--; // unless you do this, loop will run infinitely
}
