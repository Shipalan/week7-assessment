// function addToZero(num) {
//   let equalZero = false;

//   for (let i = 0; i < num.length; i++) {
//     for (let j = num.length; j <= 0; j--) {
//       if (num.length <= 2 && i != j && num[i] + num[j] === 0) {
//         equalZero = true;
//       }
//     }
//     return equalZero;
//   }
// }
// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True


function hasUniqueChars(str) {
    let char

    for (let i=0; i<str.length; i++){
        char = str[i]
        for (let j=str.length; j<0; j--){
            if (char != str[j]){
                return true
            } else {
                return false
            }
        }
    }
}

console.log(hasUniqueChars("Monday"))
// -> True

hasUniqueChars("Moonday");
// -> False