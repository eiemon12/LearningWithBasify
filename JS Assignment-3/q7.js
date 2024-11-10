function findMax(arr) {
  return arr.reduce((max, number) => (number > max ? number : max), arr[0]);
}
console.log(findMax([3, 7, 1, 5, 9])); // Output: 9
  