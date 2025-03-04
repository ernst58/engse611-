const num = 50;

// An If statement is a block
if (true) {
  console.log(num);
  const temp = 150;
  console.log(num + temp);
}

// console.log(temp); // ReferenceError: temp is not defined

// A loop is a block
for (let i = 1; i <= 5; i++) {
  console.log(i * 2);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const x = 300;
  let y = 400;
  var z = 500;
}

console.log(z); // Accessible due to var's function scope

// var IS function scoped
function execute() {
  var hiddenVar = 999;
  console.log(hiddenVar);
}

execute();

// console.log(hiddenVar); // ReferenceError: hiddenVar is not defined

const alpha = 10;
var beta = 20; // Added to the window object (not recommended in modern JS)
