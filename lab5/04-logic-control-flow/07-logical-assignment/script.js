// ||= assigns the right-side value only if the left is a falsy value.

let a = 0; // Changed from null

// if (!a) {
//   a = 15;
// }

// a = a || 15;

a ||= 15;

console.log(a); // Should now be 15

// &&= assigns the right-side value only if the left is a truthy value.

let b = 5; // Changed from 10

if (b) {
  b = 25;
}

b = b && 25;

b &&= 25;

console.log(b); // Should now be 25

// ??= assigns the right-side value only if the left is null or undefined.

let c = undefined; // Changed from null

if (c === null || c === undefined) {
  c = 30;
}

c = c ?? 30;

c ??= 30;

console.log(c); // Should now be 30
