// Challenge 1
const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCelsius(35).toFixed(2)} \xB0C`); // Rounded to 2 decimals

// Challenge 2
const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });
console.log(minMax([2, 31, 4, 5, 6]));

// Challenge 3
((length, width) => {
  console.log(
    `The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`
  );
})(20, 10);
