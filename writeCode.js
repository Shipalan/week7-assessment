function addToZero(num) {
  let equalZero = false;

  for (let i = 0; i < num.length; i++) {
    //loops through the array to check i against j
    for (let j = 0; j<num.length; j++) {
        //loops through the array to check j against i
      if (num.length >= 2 && num[i] !== num[j] && num[i] + num[j] === 0)
      //if the length is at least 2 or greater & i is not j & i+j = 0
       {
        equalZero = true;
      }
    }
}
return equalZero;
}
console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True


// function hasUniqueChars(str) {
//     let char

//     for (let i=0; i<str.length; i++){
//         char = str[i]
//         for (let j=str.length; j<0; j--){
//             if (char != str[j]){
//                 return true
//             } else {
//                 return false
//             }
//         }
//     }
// }

// console.log(hasUniqueChars("Monday"))
// // -> True

// hasUniqueChars("Moonday");
// // -> False