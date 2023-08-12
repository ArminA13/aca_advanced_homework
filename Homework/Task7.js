// Given an array, return a new array that only includes the numbers.
// const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, 
// NaN]; 
// // [1, 2, 55, 166]


const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, 
NaN]; 

function getIncludes (arr) {

    return arr.filter((x) => x === +x)

}

console.log(getIncludes(arr));