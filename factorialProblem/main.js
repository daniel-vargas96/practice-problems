//Recursive factorial problem

//base case- 1
//Make sure to always have a base case in recursion
//Create a recursive function that returns the factorial of a input number


function facotrial (num) {
  if (num === 1) return 1;
  return num * facotrial(num - 1);
}

console.log(facotrial(3));
console.log(facotrial(4));
console.log(facotrial(5));
