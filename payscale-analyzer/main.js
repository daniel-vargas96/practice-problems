function payscaleAnalyzer(payList) {
  let output = 0;
  let highestVal = payList[0];
  let lowestVal = payList[1];
  for(let i = 0; i < payList.length; i++) {
    if(payList[i] > highestVal) {
      highestVal = payList[i];
    } else if(payList[i] < lowestVal) {
      lowestVal = payList[i];
    }
  }
  return highestVal - lowestVal;
}
