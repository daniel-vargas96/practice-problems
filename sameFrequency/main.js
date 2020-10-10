// change integers to a string
//write out any edge cases
  //if length of num2 is not equal to num1 return false
//create frequency objects for each num input
// loop through first input checking the frquency of each digit and storing in an obj
// do the same for the second input
// compare both objects and if frquency does not match return false
// else return true

function sameFrequency(num1, num2) {

  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  let num1Frequency = {};
  let num2Frequency = {};

  for (let val of num1) {
    num1Frequency[val] = (num1Frequency[val] || 0) + 1;
  }
  for (let val of num2) {
    num2Frequency[val] = (num2Frequency[val] || 0) + 1;
  }
  for (let key in num1Frequency) {
    if (!(key in num2Frequency)) {
      return false;
    }
    if (num2Frequency[key] !== num1Frequency[key]) {
      return false;
    }
  }
  return true;
}
