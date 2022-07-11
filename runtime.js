const perf = require('execution-time')();




//multiplying nums by 2

function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

//multiplying each number by 2 and inserting it to the beginning

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


//pushing each number from the size arrays into the new array then returning it.


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results



// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("append", resultsAppend.preciseWords);
console.log("insert", resultsInsert.preciseWords);




//Notes-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//extraLrageArray
//Takes  2.5863 ms to double every number in the extraLargeArray and add it to the end of the new array
//Takes 925.4186 ms to add each number from the extraLargeArray to the beginning of the new array

//largeArray
//Takes 442.1 μs to double every number in the largeArray and add it to the end of the new array
//Takes 7.4713 ms to add each number from the largeArray to the beginning of the new array

//mediumArray
//Takes 170.7 μs to double every number in the mediumArray and add it to the end of the new array
//Takes 162.4 μs to add each number from the mediumArray to the beginning of the new array

//smallArray
//Takes 130.6 μs to double every number in the smallArray and add it to the end of the new array
//Takes 42.5 μs to add each number from the smallArray to the beginning of the new array

//tinyArray
//Takes 120.3 μs to double every number in the tinyArray and add it to the end of the new array
//Takes 35 μs to add each number from the tinyArray to the beginning of the new array

//Doubling each number and pushing it to the array seems to take be pretty fast regardless of size
//Doubling each number and unshifting it to the beginning is really fast with small amounts, but takes way longer with higher amounts of values.

//It seems like if you stay under the mediumArray amount the unshift method is faster, but as soon as you get to the large array it takes considerably longer the the push method. Id say overall for what we used it for here the unshift is probably better, but if you were to do large volumns all the time you would want to use the push method.

//The unshift method is slow with large volumes because it has to shift each element in the array everytime you add another element.