function mergeSort(arr1, arr2) {
  let output = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      output.push(arr1[i])
      i++;
    } else {
      output.push(arr2[j])
      j++;
    }
  }
  while (i < arr1.length) {
    output.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    output.push(arr2[j])
    j++;
  }
  return output;
}

function mergeSortRecursive(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSortRecursive(arr.slice(0, mid));
  let right = mergeSortRecursive(arr.slice(mid));
  return mergeSort(left, right);

}

console.log(mergeSortRecursive([10, 24, 76, 73, 72, 1, 9]))
