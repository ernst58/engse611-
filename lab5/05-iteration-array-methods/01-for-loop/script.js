// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i < 15; i++) { // Changed limit to 15
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log('Iteration ' + i);
  
    for (let j = 1; j <= 3; j++) { // Changed inner loop limit to 3
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
  
  // Loop through an array
  const names = ['Alice', 'Bob', 'Sara', 'John', 'Tim']; // Changed names array
  
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Bob') { // Changed condition to 'Bob'
      console.log(names[i] + ' is awesome');
    } else {
      console.log(names[i] + ' is cool');
    }
  }
  