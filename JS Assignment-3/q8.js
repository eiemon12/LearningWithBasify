function anyNegative(arr) {
  return arr.some(number => number < 0);
} 
console.log(anyNegative([1, -2, 3, 4])); // Output: true
console.log(anyNegative([1, 2, 3, 4])); // Output: false
  