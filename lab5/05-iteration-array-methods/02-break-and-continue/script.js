// Break
for (let i = 0; i <= 30; i++) { // Changed loop limit to 30
    if (i === 18) { // Changed condition to break at 18
      console.log('Breaking at 18...');
      break;
    }
    console.log(i);
  }
  
  // Continue
  for (let i = 0; i <= 30; i++) { // Changed loop limit to 30
    if (i === 17) { // Changed condition to skip 17
      console.log('Skipping 17...');
      continue;
    }
    console.log(i);
  }
  