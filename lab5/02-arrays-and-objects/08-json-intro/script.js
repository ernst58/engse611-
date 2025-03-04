const post = {
    id: 2,
    title: 'Modified Post',
    body: 'This is an updated body',
  };
  
  // Convert to JSON string
  const str = JSON.stringify(post);
  
  console.log("1. JSON string:", str);
  
  // Parse JSON
  const obj = JSON.parse(str);
  
  console.log("2. Parsed object ID:", obj.id);
  
  // JSON & arrays
  const posts = [
    {
      id: 1,
      title: 'First Post',
      body: 'This is the first post body',
    },
    {
      id: 2,
      title: 'Second Post',
      body: 'This is the second post body',
    },
    {
      id: 3,
      title: 'Third Post',
      body: 'This is the third post body',
    },
  ];
  
  const str2 = JSON.stringify(posts, null, 2); // Pretty-print JSON
  
  console.log("3. JSON array of posts:\n", str2);
  