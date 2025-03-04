let x;

// Create object using the object constructor
const todo = new Object();

todo.id = 2;
todo.name = 'Walk the dog';
todo.completed = true;

console.log("1. Todo object:", todo);

x = todo;

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 37.7749,
      lng: -122.4194,
    },
  },
};

x = person.address.coords.lat;
console.log("2. Latitude:", x);

const obj1 = { x: 10, y: 20 };
const obj2 = { z: 30, w: 40 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
console.log("3. Merged object using spread:", obj3);

// Using Object.assign()
const obj4 = Object.assign({}, obj1, obj2);
console.log("4. Merged object using Object.assign():", obj4);

// Array of objects
const todos = [
  { id: 1, name: 'Walk the dog' },
  { id: 2, name: 'Do the laundry' },
  { id: 3, name: 'Read a book' },
];

x = todos[1].name;
console.log("5. Second todo item:", x);

// Get array of object keys
x = Object.keys(todo);
console.log("6. Object keys:", x);

// Get length of an object
x = Object.keys(todo).length;
console.log("7. Length of todo object:", x);

// Get array of object values
x = Object.values(todo);
console.log("8. Object values:", x);

// Get array of object key/value pairs
x = Object.entries(todo);
console.log("9. Object entries:", x);

// Check if object has a property
x = todo.hasOwnProperty('deadline');
console.log("10. Does todo have 'deadline' property?", x);
