function bubbleSort(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    for(let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}


console.log(bubbleSort([1,4,2,16,54,3]));


//optimized version
function bubbleSort1(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort1([8,1,2,3,4,5,6,7]));
