function multiply(a, b) {
  return a * b;
}

function multiplyNumbers(num1, num2) {
  return multiply.apply(null, [num1, num2]);
}

console.log(multiplyNumbers(4, 6)); // Output: 24
console.log(multiplyNumbers(10, 5)); // Output: 50
console.log(multiplyNumbers(7, 3)); // Output: 21
