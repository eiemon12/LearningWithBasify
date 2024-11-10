function sumArray(arr) {
  let sum = 0;
  arr.forEach(number => sum += number);
  return sum;
  }
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  