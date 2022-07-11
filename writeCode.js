function addToZero(num) {
  let equalZero = false;

  for (let i = 0; i < num.length; i++) {
    for (let j = num.length; j <= 0; j--) {
      if (num.length <= 2 && i != j && num[i] + num[j] === 0) {
        equalZero = true;
      }
    }
    return equalZero;
  }
}
console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True
