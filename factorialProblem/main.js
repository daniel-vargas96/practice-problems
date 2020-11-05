//Recursive factorial problem

//base case-

function facotrial (num) {
  if (num === 1) return 1;
  return num * facotrial(num - 1);
}

console.log(facotrial(3));
console.log(facotrial(4));
console.log(facotrial(5));
