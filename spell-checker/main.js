function spellChecker(userWords, correctWords) {
  const output = {};
  const correctArray = [];
  const incorrectArray = [];
  for(let i = 0; i < userWords.length; i++) {
      if(userWords[i] !== correctWords[i]) {
        incorrectArray.push(userWords[i]);
        output["incorrect"] = incorrectArray;
      } else {
        correctArray.push(userWords[i]);
        output["correct"] = correctArray;
      }
  }
  return output;
}
