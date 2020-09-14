//write a conditional that checks if the day is equal to 24 and month equal to 12
//getMonth() starts with 0 for january so december will actually be 11
//if both checks are true return true
//if not return false

function isSantaComing(dateObject) {
  if(dateObject.getDate() === 24 && dateObject.getMonth() === 11) {
    return true;
  } else {
    return false;
  }
}
