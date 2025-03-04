// Challenge 1
const people = [
    {
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@gmail.com',
      phone: '111-222-3333',
      age: 28,
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob@gmail.com',
      phone: '222-333-4444',
      age: 22,
    },
    {
      firstName: 'Charlie',
      lastName: 'Brown',
      email: 'charlie@gmail.com',
      phone: '333-444-5555',
      age: 30,
    },
    {
      firstName: 'Diana',
      lastName: 'White',
      email: 'diana@gmail.com',
      phone: '444-555-6666',
      age: 18,
    },
    {
      firstName: 'Eve',
      lastName: 'Green',
      email: 'eve@gmail.com',
      phone: '555-666-7777',
      age: 24,
    },
  ];
  
  const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
      name: person.firstName + ' ' + person.lastName,
      email: person.email,
    }));
  
  console.log(youngPeople);
  
  // Challenge 2
  const numbers = [3, -5, 8, 15, -2, -7, 12];
  
  const positiveSum = numbers
    .filter((number) => number > 0)
    .reduce((acc, cur) => acc + cur, 0);
  
  console.log(positiveSum);
  
  // Challenge 3
  const words = ['developer', 'engineer', 'designer'];
  
  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  
  console.log(capitalizedWords);
  