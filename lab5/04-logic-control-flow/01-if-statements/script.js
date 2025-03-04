// If Statement Syntax
if (true) {
    console.log('Yep, this is true');
  }
  
  if (false) {
    console.log('You’ll never see this message');
  }
  
  // Evaluation expressions
  const x = 15;
  const y = 10;
  
  if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
  }
  
  if (x === y) {
    console.log(`${x} is equal to ${y}`);
  } else {
    console.log(`${x} is definitely NOT equal to ${y}`);
  }
  
  // Block scope
  if (x !== y) {
    const z = 30;
    console.log(`${z} is now 30`);
  }
  
  console.log(z); // Throw error
  
  // Shorthand If/Else
  if (x > y)
    console.log(`${x} is greater than ${y}`),
      cons
  