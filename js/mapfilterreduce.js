const filter = require("jade/lib/filters");

const arr = [5, 1, 0, 5, 0, 0, 8, 0, 3, 2, 6];

function double(x) {
  return 2 * x;
}

const binary = arr.map((r) => r.toString(2)); //binary convertion
const doubled = arr.map(double);
console.log(doubled);
console.log(binary);

const filterd = arr.filter((elem) => {
  return elem % 2 !== 0;
});

console.log(filterd);

const newa = arr.sort((a, b) => b - a - (a - b));
const newb = arr.sort((a, b) => b - a);

console.log(newa);
console.log(newb);

const red = arr.reduce(function (acc, curr) {
  return (acc = acc + curr);
}, 0);
const max = arr.reduce(function (max, curr) {
  if (curr > max) max = curr;
  return max;
}, 0);


console.log(max);
