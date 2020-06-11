//declare a function named isWithinRange with two parameters
//first is a number and second is an object
function isWithinRange(number, rangeObject) {
    //declare an if statement that checks if num is with in the min and max properties of the object
    if(number >= rangeObject.min && number <= rangeObject.max) {
      //return true if given number is within range
      return true;
    } else {
      //return false is given number is not in range
      return false;
    }
}
