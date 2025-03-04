let a = 10;
let b = a;  // Copying value, not reference
b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20

let obj1 = { name: "John" };
let obj2 = obj1;  // Copying reference, not value
obj2.name = "Doe";

console.log(obj1.name); // "Doe" (changed)
console.log(obj2.name); // "Doe"