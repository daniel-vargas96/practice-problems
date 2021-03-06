function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  if (arr.length === 0) {
    return false;
  }
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === num) {
      return true;
    }
    if (avg > num) {
      right--;
    }
    if (avg < num) {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6],4.1));
console.log(averagePair([],4));
