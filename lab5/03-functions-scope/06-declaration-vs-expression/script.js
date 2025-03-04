// Function Declaration
function addEuroSign(value) {
    return '€' + value;
  }
  
  // You can invoke the function before the declaration with function declarations
  console.log(addEuroSign(150));
  
  // Function Expression
  const addHashSign = function (value) {
    return '#' + value;
  };
  
  console.log(addHashSign(300));
  