function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      case '%':
        result = num1 % num2;
        break;
      default:
        result = 'Error: Unsupported Operator';
    }
  
    console.log(result);
    return result;
  }
  
  calculator(10, 3, '%');
  