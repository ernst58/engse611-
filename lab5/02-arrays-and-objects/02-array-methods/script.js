let x;

const arr = [15, 42, 67, 89, 120];

console.log("1. Original Array:", arr);

// push() - Push a value onto the end of the array
arr.push(200);
console.log("2. After push(200):", arr);

// pop() - Remove the last value
arr.pop();
console.log("3. After pop():", arr);

// unshift() - Add a value to the beginning
arr.unshift(77);
console.log("4. After unshift(77):", arr);

// shift() - Remove first value
arr.shift();
console.log("5. After shift():", arr);

// reverse() - Reverse the array
arr.reverse();
console.log("6. After reverse():", arr);

// includes() - Check if a value exists in the array
x = arr.includes(500);
console.log("7. Includes 500?", x);

// indexOf() - Find the index of a value
x = arr.indexOf(42);
console.log("8. Index of 42:", x);

// Convert array to string
x = arr.toString();
console.log("9. Array as string:", x);

x = arr.join("-");
console.log("10. Array joined with '-':", x);

// slice() - Extract part of the array without modifying original
x = arr.slice(1, 3);
console.log("11. Slice (1,3):", x);

// splice() - Remove elements and mutate the original array
x = arr.splice(1, 2);
console.log("12. Splice (1,2) - Removed elements:", x);
console.log("13. Array after splice:", arr);

// Remove a single element at index 2
x = arr.splice(2, 1);
console.log("14. Splice (2,1) - Removed element:", x);
console.log("15. Array after removing index 2:", arr);

// Chaining methods
x = arr.slice(0, 3).reverse().toString().charAt(0);
console.log("16. Chained methods result:", x);
