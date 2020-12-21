// Helper methods
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let digitLen = digitCount(nums[i]);
    if (digitLen > max) {
      max = digitLen;
    }
  }
  return max;
}

// console.log(mostDigits([1234,56,7,34567]));

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }

}

console.log(radixSort([23,345,5467,12,2345,9852]));
