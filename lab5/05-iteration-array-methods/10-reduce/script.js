const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Add all numbers together
const totalSum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const totalSum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// Using a for loop
const totalSum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

// Shopping cart example (objects with different products)
const shoppingCart = [
  { id: 1, name: 'Gadget A', price: 120 },
  { id: 2, name: 'Gadget B', price: 175 },
  { id: 3, name: 'Gadget C', price: 220 },
  { id: 4, name: 'Gadget D', price: 95 },
];

const cartTotal = shoppingCart.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

console.log(cartTotal);
