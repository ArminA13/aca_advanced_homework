// pop

let arr = [10, 11, "a"];

function pop(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    const poppedElement = arr[arr.length - 1];
    arr.length -= 1;
    return poppedElement;
}

console.log(pop(arr));
console.log(arr);
