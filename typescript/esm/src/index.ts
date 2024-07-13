import x from './module-x.js';
import y from './module-y.js';

console.log("Through typescript we can leverage the modern ESM syntax, but still compile CommonJS modules.");

function add(x: number, y: number) {
  return x + y;
}

const result = add(x, y);

console.log("result computed from x and y:", result);
