console.log(5 < 15 && 25 > 10 && 50 > 20); // Must all be true
console.log(5 > 15 || 25 < 10); // Only one has to be true

// && - Will return first falsy value or the last value
let a;

a = 5 && 15;
a = 5 && 15 && 25;
a = 5 && 0 && 25;
a = 5 && '' && null && 25;

console.log(a);

const posts = ['Article One', 'Article Two']; // Changed post names
posts.length > 0 && console.log(posts[1]); // Now logs second post

// || - Will return the first truthy value or the last value

let b;

b = 5 || 15;
b = 0 || 15;
b = 0 || null || '' || undefined || 'Fallback';

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 5 ?? 15;
c = null ?? 15;
c = undefined ?? 25;
c = 0 ?? 25;
c = '' ?? 25;

console.log(c);
