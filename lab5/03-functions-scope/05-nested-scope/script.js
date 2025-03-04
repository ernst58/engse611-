function first() {
    const a = 50;
  
    function second() {
      const b = 150;
      console.log(a + b);
    }
  
    // console.log(b); // ReferenceError: b is not defined
  
    second();
  }
  
  first();
  
  if (true) {
    const num = 75;
  
    if (num === 75) {
      const temp = 125;
      console.log(num + temp);
    }
  
    // console.log(temp); // ReferenceError: temp is not defined
  }
  