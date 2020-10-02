function howManyTimes(num) {
  let a = 'a';
  let output = 'Ed' + (a.repeat(num)) + 'bit';
  return output;
}
console.log(howManyTimes(5));
console.log(howManyTimes(0));
console.log(howManyTimes(12));
