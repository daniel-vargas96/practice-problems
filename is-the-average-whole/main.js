function isTheAverageWhole(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum =+ array[i];
  }
    var avg = sum / array.length;
    if (avg === Math.trunc(avg)) {
      return true;
    } else {
      return false;
    }
}
