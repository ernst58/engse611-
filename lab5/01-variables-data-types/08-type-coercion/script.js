let x;

// Coerced to a string (บวก string → แปลงเป็น string)
x = 5 + '5'; // '55'
console.log(x, typeof x); // '55' (string)

// บวกเลขโดยใช้ `Number()` แปลง string เป็น number ก่อน
x = 5 + Number('5'); // 10
console.log(x, typeof x); // 10 (number)

// Coerced to a number (`*` บังคับให้เป็นตัวเลข)
x = 5 * '5'; // 25
console.log(x, typeof x); // 25 (number)

// `null` เป็น `falsy` และถูกแปลงเป็น `0`
x = 5 + null; // 5 + 0 = 5
console.log(x, typeof x); // 5 (number)

// `Number(null)` → 0
x = Number(null); // 0
console.log(x, typeof x); // 0 (number)

// `true` → 1, `false` → 0
x = Number(true); // 1
console.log(x, typeof x); // 1 (number)

x = Number(false); // 0
console.log(x, typeof x); // 0 (number)

// `true` → 1 เมื่อใช้ในการบวก
x = 5 + true; // 5 + 1 = 6
console.log(x, typeof x); // 6 (number)

// `false` → 0
x = 5 + false; // 5 + 0 = 5
console.log(x, typeof x); // 5 (number)

// `undefined` ไม่สามารถแปลงเป็นตัวเลขได้ → `NaN`
x = 5 + undefined; // NaN
console.log(x, typeof x); // NaN (number)
