function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').reduce((count, char) => vowels.includes(char) ? count + 1 : count, 0);
}
console.log(countVowels("javascript")); // Output: 3
  