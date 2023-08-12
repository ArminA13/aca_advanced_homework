// Given an array, return the sum of numbers that are 18 or over.
// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]; 
// // 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]; 


function getSum (arr) {
    return arr.reduce((acc, element) => {
        if(element < 18){
            return acc
        }else {
            return acc + element
        }
    }, 0)


}

console.log(getSum(arr));