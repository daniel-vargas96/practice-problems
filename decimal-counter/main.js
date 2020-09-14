function decimalPlaceCounter(string) {
  var decimalNumber = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] === '.') {
      i++;
      decimalNumber = string.length - i;
    }
  }
  return decimalNumber;
}
