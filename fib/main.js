// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//fib sequence start at 1 and 1 and theerafter the next number is equal to the
//sum of the previous 2 number: 1,1,2,3,5,8,13,21...

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2)
}

console.log(fib(4));
