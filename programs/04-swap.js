// using temp
let a = 10;
let b = 20;
let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(`a: ${a} and b: ${b}`);

// without third variable
a = a + b;
b = a - b;
a = a - b;
console.log(`a: ${a} and b: ${b}`);

// third way
// a = a * b;
// b = a / b;
// a = a / b;

// console.log(`a: ${a} and b: ${b}`);
