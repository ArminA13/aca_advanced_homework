//unshift

let arr = [10, 11, "a"];

function unshift(arr, val) {
    let i = arr.length - 1;
    while (i >= 0) {
        arr[i + 1] = arr[i];
        i--;
    }
    arr[0] = val;
    return;
}

console.log(unshift(arr, "b"));
