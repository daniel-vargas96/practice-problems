function getWordCount(string) {
  return string.split(' ').length;
}
var getWordCountResult = getWordCount('I was running');
console.log('getWordCount:', getWordCountResult);
