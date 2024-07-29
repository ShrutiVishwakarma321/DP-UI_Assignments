function calculate(num1, num2, operator) {
    return new Promise((resolve, reject) => {
      const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => (b === 0 ? reject('Division by zero') : a / b)
      };
  
      if (!operations[operator]) {
        reject('Invalid operator');
      } else {
        resolve(operations[operator](num1, num2));
      }
    });
  }
  
  // Example usage:
  calculate(2, 3, '+')
    .then(result => console.log(result)) // Output: 5
    .catch(error => console.error(error));
  
  calculate(5, 0, '/')
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Output: Division by zero
  