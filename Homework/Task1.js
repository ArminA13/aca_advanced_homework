const arr1 = [1, 2, 3, 4]; 
const arr2 = [5, 6, 7, 8, 9];

function getConcat (arr1, arr2) {
    let result = arr1.concat(arr2);
    return result

}

console.log(getConcat(arr1, arr2));



function getCon (arr1, arr2) {
    let result = arr1.push(arr2);
    return result

}

console.log(getCon(arr1, arr2));