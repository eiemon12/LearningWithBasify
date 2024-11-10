function squareAndSum(arr) {
  return arr.map(number => number * number).reduce((acc, curr) => acc + curr, 0);
}
console.log(squareAndSum([1, 2, 3])); // Output: 14 (1^2 + 2^2 + 3^2)
  