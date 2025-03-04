let x;

// Creating an object
const person = {
  name: 'Ernst Schmitt',
  age: 25,
  isAdmin: false,
  address: {
    street: '456 Elm St',
    city: 'Innsbruck',
    state: 'Tirol',
  },
  hobbies: ['reading', 'hiking'],
};

// Accessing object properties
x = person.name; // Dot notation
console.log("1. Name:", x);

x = person['age']; // Bracket notation
console.log("2. Age:", x);

x = person.address.state;
console.log("3. State:", x);

x = person.hobbies[0];
console.log("4. First Hobby:", x);

// Updating properties
person.name = 'Bob Johnson';
person['isAdmin'] = true;

console.log("5. Updated Name:", person.name);
console.log("6. Updated isAdmin:", person.isAdmin);

// Deleting properties
delete person.age;
console.log("7. After deleting age:", person);

// Create new properties
person.hasPets = true;
console.log("8. Added hasPets:", person.hasPets);

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

console.log("9. Calling greet function:");
person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Charlie',
  'last name': 'Brown',
};

x = person2['first name'];
console.log("10. First Name from person2:", x);
