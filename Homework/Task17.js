// forEach

arr = [10, 11, "a"];

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

forEach(arr, function (element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array:`, array);
});
