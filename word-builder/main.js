function wordBuilder(string) {
  //declare output array and store in a variable
  var result = [];

  //declare variable that will initally be an empty string
  //and eventually store each string for output array
  var word = '';

  //run a for loop that iterates through the input string
  for(var i = 0; i < string.length; i++) {
    
    //add each character at the given index together
    //and store in word variable
    word += string[i];

    //push the word variable into the output array
    result.push(word);
  }
  //return output array
  return result;
}
