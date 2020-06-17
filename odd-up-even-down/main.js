//declare output array;
//run a for loop to iterate through input array
//declare a condition check to see if the value at the index of an
//array is odd.
//If the value of the index is odd then add 1 and push that value into the output array.
//if the value is not odd, then subtract 1 and push the new value into the output array
//return the outputArray.

function oddUpEvenDown(array) {
  var outputArray = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 1) {
      var newValue1 = array[i] + 1;
      outputArray.push(newValue1)

    } else {
      var newValue2 = array[i] - 1;
      outputArray.push(newValue2);
    }
  }
  return outputArray;
}
