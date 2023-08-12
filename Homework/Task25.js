//slice

let arr = [45, 78, 54, 23, 30];

function slice(arr, start, end) {
    let result = [];
    start = start || 0;
    end = end || arr.length;

    if (start < 0) {
        start += arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }

    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}

console.log(slice(arr, 1, 3));
