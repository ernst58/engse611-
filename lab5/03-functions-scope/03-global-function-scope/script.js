// 'window' is globally scoped
// alert('Hello');
// console.log(window.innerWidth);

// Global scope variable
const x = 200;

console.log(x, 'in global');

function run() {
  // Access global vars in functions
  console.log(window.innerHeight);
  console.log(x, 'inside function');
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, 'inside block');
}

function add() {
  // Overwriting global x (variable shadowing)
  const x = 5;
  const y = 25;
  console.log(x + y);
}

// Cannot access function-scoped variables in global scope
// console.log(y); // This would throw an error

add();
