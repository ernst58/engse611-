// Loop through arrays
const items = ['pen', 'desk', 'lamp', 'ball']; // Changed items array
const users = [{ name: 'John' }, { name: 'Alice' }, { name: 'Tom' }]; // Changed users array

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'Goodbye World'; // Changed string to 'Goodbye World'

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('city', 'New York'); // Changed map values
map.set('country', 'USA');

for (const [key, value] of map) {
  console.log(key, value);
}
