// Takes input of two different arrays
// Iterates through both arrays checking if they have the same frequency
  // Same frequency meaning: the second array when compared to the first array has corresponding values squared from the first array.
// If the two arrays have the same frequency return true
// else return false
// O(N^2) way
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(Math.pow(arr1[i], 2));
      if (correctIndex === -1) {
        return false;
      }
      arr2.splice(correctIndex, 1);
  }
  return true;
}


console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));


//Faster way for time complexity
// O(n)

function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same1([1,2,3,2], [9,1,4,4]));


function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Frequency = {};
  let str2Frequency = {};
  for (let val of str1) {
    str1Frequency[val] = (str1Frequency[val] || 0) + 1;
  }

  for (let val of str2) {
    str2Frequency[val] = (str2Frequency[val] || 0) + 1;
  }
  for (let key in str1Frequency) {
    if (!(key ** 2 in str2Frequency)) {
      return false
    }
    if (str2Frequency[key ** 2] !== str1Frequency[key]) {
      return false
    }
  }
  return true
}
