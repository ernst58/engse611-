let x;

// Array Literal
const numbers = [8, 27, 56, 14, 72, 99];
const mixed = [42, 'World', false, undefined];

console.log("1. Numbers Array:", numbers);
console.log("2. Mixed Array:", mixed);

// Array Constructor
const fruits = new Array('banana', 'cherry', 'mango');
console.log("3. Fruits Array:", fruits);

// Get value by index
console.log("4. First number:", numbers[0]);

console.log("5. Sum of first and fourth numbers:", numbers[0] + numbers[3]);

console.log("6. My favorite fruit is a", fruits[2]);

console.log("7. Numbers array length:", numbers.length);

// Modify an array element
fruits[2] = 'kiwi';
console.log("8. Fruits after modifying third element:", fruits);

// Add new elements
fruits[3] = 'pineapple';
fruits[fruits.length] = 'papaya';
fruits[fruits.length] = 'coconut';

console.log("9. Fruits after adding more elements:", fruits);
