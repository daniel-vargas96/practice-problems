
function sumArray(array) {
  var sum = 0;
  for (var index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}
console.log(sumArray([1, 3, 5, 7]));
