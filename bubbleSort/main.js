function bubbleSort(arr) {
  for(let i = arr.length - 1; i >= 0; i--) {
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
