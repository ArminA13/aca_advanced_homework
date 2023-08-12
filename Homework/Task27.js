//flat

let arr = [1, [2, [3]], [4, 5], 6, [7]];

function flat(arr, deep = 1) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && deep > 0) {
            result.push(...flat(arr[i], deep - 1));
        } else {
            result.push(arr[i]);
        }
    }
    return result
}

console.log(flat(arr, 2));
