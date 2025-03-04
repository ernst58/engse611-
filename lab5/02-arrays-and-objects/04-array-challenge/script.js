// Challenge 1

const arr = [10, 20, 30, 40, 50];

// arr.reverse();
// arr.push(5);
// arr.unshift(60);

// Same result as above
arr.push(60);
arr.unshift(5);
arr.reverse();

console.log("Challenge 1 Result:", arr);

// Challenge 2

const arr1 = [10, 20, 30, 40, 50];
const arr2 = [50, 60, 70, 80, 90, 100];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log("Challenge 2 - Solution 1:", arr3);

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log("Challenge 2 - Solution 2:", arr4);
