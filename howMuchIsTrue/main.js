//iterate through array
//check to see if each index is equal to 'true'
//if it is equal to true add 1 to result variable
//in order to keep count of the number of true booleans in the array

function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
    if (arr.length === 0) {
      return 0;
    }
  }
  return count;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
