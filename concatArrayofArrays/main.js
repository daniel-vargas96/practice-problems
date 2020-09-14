function concat(...args) {
  let output = [];
  return output.concat.apply([], args);
}
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
