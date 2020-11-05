function power (num1, num2) {
  let result = 0;
  if (num2 === 0) return 1;
  result = num1 * power(num1, num2 - 1);
  return result;
}

console.log(power(2,0));
console.log(power(2, 2));
console.log(power(2, 4));
