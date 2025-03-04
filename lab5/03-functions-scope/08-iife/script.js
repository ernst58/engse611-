// IIFE Syntax (Has its own scope and runs right away)
(function () {
    const user = 'Alice';
    console.log(user);
    const greet = () => console.log('Greetings from the IIFE');
    greet();
  })();
  
  // Params
  (function (name) {
    console.log('Welcome, ' + name);
  })('Charlie');
  
  // Named IIFE (Can only be called recursively)
  (function sayHello() {
    console.log('Hey there!');
  })();
  