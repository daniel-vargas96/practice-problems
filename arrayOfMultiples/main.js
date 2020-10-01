function arrayOfMultiples(num, length) {
  let output = [];
  let sum = 0;
  for (let i = 0; i < length; i++) {
    output.push(sum += num);
  }
  return output;
}
