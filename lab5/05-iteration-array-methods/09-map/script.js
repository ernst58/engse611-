const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const tripledNumbers = numbers.map((num) => num * 3);
console.log(tripledNumbers);

// Same with forEach
const tripledNumbers2 = [];
numbers.forEach((num) => {
  tripledNumbers2.push(num * 3);
});

const businesses = [
  { name: 'Biz Alpha', category: 'Healthcare', start: 1990, end: 2005 },
  { name: 'Biz Beta', category: 'Energy', start: 2000, end: 2015 },
  { name: 'Biz Gamma', category: 'Retail', start: 1995, end: 2010 },
  { name: 'Biz Delta', category: 'Finance', start: 1985, end: 2000 },
  { name: 'Biz Epsilon', category: 'Tech', start: 2010, end: 2018 },
  { name: 'Biz Zeta', category: 'Finance', start: 1998, end: 2012 },
  { name: 'Biz Theta', category: 'Construction', start: 2002, end: 2015 },
  { name: 'Biz Iota', category: 'Energy', start: 2008, end: 2020 },
  { name: 'Biz Kappa', category: 'Healthcare', start: 2015, end: 2022 },
];

// Create an array of business names
const businessNames = businesses.map((business) => business.name);

// Create an array with just business name and category
const businessInfo = businesses.map((business) => {
  return {
    name: business.name,
    category: business.category,
  };
});

// Create an array of objects with the name and the length of each business in years
const businessYears = businesses.map((business) => {
  return {
    name: business.name,
    length: business.end - business.start + ' years',
  };
});

console.log(businessYears);

// Chain map methods
const cubeAndAddFive = numbers
  .map((num) => Math.pow(num, 3))
  .map((cubed) => cubed + 5);

const cubeAndAddFive2 = numbers
  .map(function (num) {
    return Math.pow(num, 3);
  })
  .map(function (cubed) {
    return cubed + 5;
  })
  .map(function (cubedPlusFive) {
    return cubedPlusFive - 2;
  });

// Chaining different methods
const oddTriple = numbers
  .filter((num) => num % 2 !== 0)
  .map((num) => num * 3);

console.log(oddTriple);
