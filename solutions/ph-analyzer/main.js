function phAnalyzer(pH) {
  if(pH >= 0 && pH < 7) {
    console.log('acidic');
  } else if(pH === 7) {
    console.log('neutral');
  } else if(pH > 7 && pH <= 14) {
    console.log('alkaline');
  } else {
    console.log('invalid pH value');
  }
}

var phAnalyzerResult = phAnalyzer(4);
