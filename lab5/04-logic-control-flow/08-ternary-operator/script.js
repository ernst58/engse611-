const age = 20; // Changed from 17

// Using an if statement
if (age >= 21) {
  console.log('You can drink alcohol!');
} else {
  console.log('You cannot drink alcohol');
}

// Using a ternary operator
age >= 21 ? console.log('You can drink alcohol!') : console.log('You cannot drink alcohol');

// Assigning a conditional value to a variable
const canDrink = age >= 21 ? true : false;
const canDrink2 = age >= 21 ? 'You can drink alcohol!' : 'You cannot drink alcohol';

console.log(canDrink);
console.log(canDrink2);

// Multiple statements

const auth = false; // Changed from true

// Shorter ternary version
const redirect = auth
  ? (alert('Welcome back!'), '/home')
  : (alert('Please log in first'), '/signin');

console.log(redirect);

// Ternary with no else
auth ? console.log('Access granted') : null;
// Shorthand for ternary with no else
auth && console.log('Access granted');
