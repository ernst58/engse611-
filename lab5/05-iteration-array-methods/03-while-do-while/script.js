let i = 0;

while (i <= 25) { // Changed the limit to 25
  console.log('Number ' + i);
  i++;
}

// Loop over arrays
const arr = [5, 15, 25, 35, 45]; // Changed the array values

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Nesting while loops
while (i <= 7) { // Changed the outer loop condition to 7
  console.log('Outer Number ' + i);

  let j = 1;
  while (j <= 3) { // Changed inner loop condition to 3
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }

  i++;
}

// Do While Loop - Always runs once
do {
  console.log('Number ' + i);
  i++;
} while (i <= 25); // Changed the limit to 25
