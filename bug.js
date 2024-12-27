function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: both a and b must be numbers.'); //Explicit error handling
  }
  return a + b;
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo('hello', 20)); // Throws an error