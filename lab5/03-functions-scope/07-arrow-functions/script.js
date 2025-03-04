// Normal function declaration
// function multiply(a, b) {
//   return a * b;
// }

// Arrow function syntax
const multiply = (a, b) => {
    return a * b;
  };
  
  // Implicit Return
  const divide = (a, b) => a / b;
  
  // Can leave off () with a single param
  const square = a => a ** 2;
  
  // Returning an object
  const createUser = () => ({
    username: 'Alice',
  });
  
  const numbers = [10, 20, 30, 40, 50];
  
  numbers.forEach(function (n) {
    console.log(n * 2);
  });
  
  // Arrow function in a callback
  numbers.forEach(n => console.log(n / 2));
  
  console.log(multiply(3, 4));
  console.log(divide(20, 5));
  console.log(square(5));
  console.log(createUser());
  