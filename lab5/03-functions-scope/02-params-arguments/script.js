// Default Params
function registerUser(user = 'Guest') {
    return `${user} has been successfully registered`;
  }
  
  console.log(registerUser());
  console.log(registerUser('Alice'));
  
  // Rest Params
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(10, 20, 30, 40, 50));
  
  // Objects as params
  function loginUser(user) {
    return `User ${user.name} (ID: ${user.id}) has logged in`;
  }
  
  const user1 = {
    id: 101,
    name: 'Michael',
  };
  
  console.log(loginUser(user1));
  console.log(
    loginUser({
      id: 202,
      name: 'Emma',
    })
  );
  
  // Arrays as params
  function getRandom(arr) {
    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Random item: ${randomItem}`);
  }
  
  getRandom(['apple', 'banana', 'grape', 'cherry', 'peach']);
  