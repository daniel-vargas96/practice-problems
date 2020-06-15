function removeNullValues(array) {
  //declare variable that will store the value of the output array
  var result = [];
  //run a for loop iterating through the input array
  for(var i = 0; i < array.length; i++) {
    //if the value of the index in the array does not equal null
    //push that value into the output array
    if(array[i] !== null) {
      result.push(array[i]);
    }
  }
  //return the output array
  return result;
}
