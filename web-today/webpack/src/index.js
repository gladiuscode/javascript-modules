import x from './module-x.js';
import y from './module-y.js';

console.log("Through webpack we can bundle all of our code into a single file and serve it to the browser.");
console.log("This is still the way most web applications are built today, even though ES modules are now supported in all major browsers.");

function add(x, y) {
  return x + y;
}

const result = add(x, y);

console.log("result computed from x and y:", result);
