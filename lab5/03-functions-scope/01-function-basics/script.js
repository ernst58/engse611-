// Define a function
function greet() {
    console.log('Hey there!');
  }
  
  // Invoke, execute or call a function
  greet();
  
  // Define a function with parameters
  function multiply(a, b) {
    console.log(a * b);
  }
  
  // Invoke function with arguments
  multiply(4, 7);
  
  // Returning a value
  function divide(x, y) {
    if (y === 0) {
      return 'Cannot divide by zero';
    }
    return x / y;
  }
  
  // Assign the returned value to a variable
  const divisionResult = divide(20, 4);
  
  console.log(divisionResult, divide(15, 3));
  
  // Function with a default parameter
  function greetUser(name = 'Guest') {
    return `Hello, ${name}!`;
  }
  
  console.log(greetUser('Alice'));
  console.log(greetUser()); // Uses default value
  