//shift

let arr = [10, 11, "a", 8];

function shift(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let shiftedElement = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr.length -= 1;
    return shiftedElement;
}

console.log(shift(arr));
console.log(arr);
