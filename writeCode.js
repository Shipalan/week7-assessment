//Sum Zero----------------------------------------------------------------------------------------

// function addToZero(num) {
//   let equalZero = false;

//   for (let i = 0; i < num.length; i++) {
// //loops through the array to check i against j
//     for (let j = 0; j<num.length; j++) {
// //loops through the array to check j against i
//       if (num.length >= 2 && num[i] !== num[j] && num[i] + num[j] === 0)
// //if the length is at least 2 or greater & i is not j & i+j = 0
//        {
//         equalZero = true;
//       }
//     }
// }
// return equalZero;
// }
// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True

//runtime for this would be O(n^2)

//Unique Characters-------------------------------------------------------------------------------------------------

// function hasUniqueChars(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 1 + i; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(hasUniqueChars("Monday"));
// // -> True

// console.log(hasUniqueChars("Moonday"));
// // -> False


////runtime for this would be O(n^2)



//Panagram Sentence--------------------------------------------------------------------------------------------------------------------


// function isPangram(str) {
//  let regex = /([a-z])(?!.*\1)/gi;
//  return (str.match(regex)).length === 26;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// // -> True

// console.log(isPangram("I like cats, but not mice"))
// // -> False


//I think the time complexity of this one is O(n) because it only has to go through it once


//Longest Word---------------------------------------------------------------------------------------------------------------------------------------------------------------

// function  longestWord(arr) {
//   let word =[]

// arr.forEach((e,i,a) => {
//   word = a[i]
//   if (a[i].length > word.length){
//     word.push(a[i])
//   }
// });
// return word.length
// }

// console.log(longestWord(["hi", "hello", "something"]))
// // -> 5)

//The time complexity of this one is O(n)