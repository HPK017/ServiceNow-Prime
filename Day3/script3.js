const sum = (a, b) => a + b;

function calculator() {
    const operation = prompt("Enter the operation (sum, minus, or mul):");
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
  
    let result;
  
    switch (operation) {
      case "sum":
        result = sum(num1, num2);
        break;
      case "minus":
        result = num1-num2;
        break;
      case "mul":
        result = num1*num2;
        break;
      default:
        console.log("Invalid operation.");
        return;
    }
  
    console.log(result);
  }

  calculator();