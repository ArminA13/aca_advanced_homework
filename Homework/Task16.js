//push;

let arr = [6, 9, 25];

function push(arr, ...elements) {
    for (let element of elements) {
        arr[arr.length] = element;
    }
    return arr.length;
}

console.log(push(arr, 4, 19, 21));
console.log(arr);
