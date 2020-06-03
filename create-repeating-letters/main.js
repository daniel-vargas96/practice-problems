function createRepeatingLetters(string, number) {
  var result = '';
  for(var i = 0; i < string.length; i++) {
    result += string[i].repeat(number);
  }
  return result;
}

var createRepeatingLettersResult = createRepeatingLetters('hey', 3);
console.log(createRepeatingLettersResult);
