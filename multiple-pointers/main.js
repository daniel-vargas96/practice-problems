function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right --;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]));


function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let backPointer = 0;
  let frontPointer = 1;
  if (arr.length === 0) {
    return 0;
  }

  for (let i = frontPointer; i < arr.length; i++) {
    if (arr[i] !== arr[backPointer]) {
      backPointer++;
      arr[backPointer] = arr[i]
    }
  }
  return backPointer + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,3,5,6]));
console.log(countUniqueValues([1,2,3,3,3,5,5,6,6]));
