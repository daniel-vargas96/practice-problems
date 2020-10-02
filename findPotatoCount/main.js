function potatoes(str) {
  let re = /potato/g;
  let count = str.match(re);
  return count.length;
}

console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));
