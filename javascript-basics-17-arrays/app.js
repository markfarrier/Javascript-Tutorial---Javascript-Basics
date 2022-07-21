// Arrays, Functions and Objects
// Arrays - [], 0 index based

const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';

const friends = ['john', 'peter', 'bob', 'susy', 45, undefined, null];

// const friends = [friend1, friend2, friend3, friend4];

console.log(friends);

console.log(friends[0]); // first value is 0, as arrays are 0 index based

let bestFriend = friends[2];
friends[4] = 'anna';
console.log(friends);
console.log(friends[4]);
console.log(bestFriend);

console.log(friends[3]);
