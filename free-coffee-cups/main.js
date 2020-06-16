//declare variable (freeCups) that will store the input number of coffee cups divided by 6
//declare an if statement that checks if freeCups is greater than or equal to 1
//if it is return input coffeeCups plus freeCups
//If it is not then just return the input coffeeCups


function freeCoffeeCups(coffeeCups) {
  var freeCups = coffeeCups / 6;
  if(freeCups >= 1) {
    return coffeeCups + Math.floor(freeCups);
  } else {
    return coffeeCups;
  }
}
