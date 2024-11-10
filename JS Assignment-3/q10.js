function sumMixedArray(arr) {
  const filteredArray = arr.filter(value => 
    typeof value === 'number' || (typeof value === 'string' && !isNaN(value) && isFinite(value))
  );
  return filteredArray.reduce((sum, value) => sum + Number(value), 0);
}
console.log(sumMixedArray([10, "20", true, 30, "40"])); // Output: 60
  