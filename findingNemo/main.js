function findNemo(sentence) {
  const sentenceArr = sentence.split(" ");
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i] === "Nemo") {
      return 'I found Nemo at' + ' ' + (i + 1) + '!';
    }
    if (!sentenceArr.includes('Nemo')) {
      return "I can't find Nemo :(";
    }
  }
}

console.log(findNemo("I am finding Nemo !"));
console.log(findNemo("Nemo is me"));
console.log(findNemo("I Nemo am"));
