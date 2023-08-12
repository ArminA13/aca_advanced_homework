//filter

let arr = [45, 78, 54, 23, 30];

function filter(arr, callback) {
    let filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
}

console.log(
    filter(arr, (val) => {
        return val % 2 === 0;
    })
);
