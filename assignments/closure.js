// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


let decrementer = 0;
function sub() {
  return decrementer -= 1
}
console.log(sub())


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  return function () {
    return count += 1
  }
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let count = 0
const counterFactory = () => {

let count = 0;
function increment() {
  return count += 1
}
function decrement() {
  return count -= 1
}
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

