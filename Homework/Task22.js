//map

let arr = [1, 2, 3, 4];

function map(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

console.log(map(arr, (val) => val * 3));
console.log(arr);
