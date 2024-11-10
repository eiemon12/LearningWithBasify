function filterPrimes(arr) {
  return arr.filter(number => {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
}
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]
  