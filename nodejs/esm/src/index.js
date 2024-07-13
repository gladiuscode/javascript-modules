import x from './module-x.js';
import y from './module-y.js';

console.log("Through nodejs we can run our js code outside of the browser.");
console.log("It used to only support CommonJS first, since it invented it, but now, since version 12, it supports both CommonJS and ESM.");

function add(x, y) {
  return x + y;
}

const result = add(x, y);

console.log("result computed from x and y:", result);
