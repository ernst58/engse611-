let x;

const fruits = ['banana', 'grape', 'mango'];
const berries = ['blackberry', 'cranberry', 'gooseberry'];

console.log("1. Fruits Array:", fruits);
console.log("2. Berries Array:", berries);

// Nesting berries inside of fruits
fruits.push(berries);
console.log("3. Fruits after nesting berries:", fruits);

// Accessing 'cranberry' using nested indexing
x = fruits[3][1];
console.log("4. Accessing nested element (cranberry):", x);

// Create a new variable and nest both arrays separately
const allFruits = [fruits, berries];
console.log("5. Nested arrays (allFruits):", allFruits);

// Access 'gooseberry' from allFruits
x = allFruits[1][2];
console.log("6. Accessing nested element (gooseberry):", x);

// concat() - Concatenate arrays
x = fruits.concat(berries);
console.log("7. Concatenated fruits and berries:", x);

// spread operator (...) - Concatenate
x = [...fruits, ...berries];
console.log("8. Using spread operator to merge arrays:", x);

// flat() - Flatten an array
const arr = [10, 20, [30, 40, 50], 60, [70, 80]];
x = arr.flat();
console.log("9. Flattened array:", x);

// Static methods of Array object

// isArray() - Check if it is an array
x = Array.isArray(fruits);
console.log("10. Is fruits an array?", x);

// from() - Create an array from a string
x = Array.from('67890');
console.log("11. Array from string '67890':", x);

// of() - Create an array from separate values
const a = 5;
const b = 10;
const c = 15;

x = Array.of(a, b, c);
console.log("12. Array created using Array.of():", x);
