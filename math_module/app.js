var mathlib = require('./mathlib')();

console.log('Testing the add function - Expected result - 5');
console.log(mathlib.add(2,3));
console.log('Testing the multiply function - Expected result - 15');
console.log(mathlib.multiply(3,5));
console.log('Testing the square function - Expected result - 25');
console.log(mathlib.square(5));
console.log('Testing the random function - Expected results - 6 random numbers between 7 and 17');
console.log(mathlib.random(7,17));
console.log(mathlib.random(7,17));
console.log(mathlib.random(7,17));
console.log(mathlib.random(7,17));
console.log(mathlib.random(7,17));
console.log(mathlib.random(7,17));