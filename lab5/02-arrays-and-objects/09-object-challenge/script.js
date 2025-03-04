// Step 1 - Modified books
const library = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      status: {
        own: true,
        reading: true,
        read: false,
      },
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      status: {
        own: true,
        reading: false,
        read: true,
      },
    },
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      status: {
        own: false,
        reading: false,
        read: true,
      },
    },
  ];
  
  // Step 2 - Marking books as read
  library[0].status.read = true;
  library[1].status.read = false;
  library[2].status.read = true;
  
  // Step 3 - Destructure the title of the first book
  const { title: firstBook } = library[0];
  
  console.log("First Book Title:", firstBook);
  
  // Step 4 - Convert to JSON string
  const libraryJSON = JSON.stringify(library, null, 2); // Pretty-print JSON
  
  console.log("Library JSON:\n", libraryJSON);
  