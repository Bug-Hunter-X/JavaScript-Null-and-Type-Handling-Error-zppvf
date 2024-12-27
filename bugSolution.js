function foo(a, b) {
  // Handle null values using optional chaining
  a = a ?? 0;
  b = b ?? 0;

  // Check for numeric inputs
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: both a and b must be numbers.');
  }

  return a + b; //Correct calculation
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: 20
console.log(foo(undefined,20)); // Output: 20
console.log(foo('hello', 20)); // Throws an error