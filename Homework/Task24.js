//reduce

let arr = [45, 78, 54, 23, 30];

function reduce(arr, callback, accumulator) {
    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

console.log(reduce(arr, (acc, val) => acc + val, 0));
