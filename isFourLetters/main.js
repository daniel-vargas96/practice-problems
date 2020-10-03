function isFourLetters(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 4) {
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(isFourLetters(["Tomato", "Potato", "Pair"]));

console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));

console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));
