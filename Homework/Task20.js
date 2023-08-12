//every

let arr = [10, 11, 21];

function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return undefined;
}

console.log(
    find(arr, (element) => {
        return element > 20;
    })
);
