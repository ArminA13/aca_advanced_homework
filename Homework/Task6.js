// Write a function which parses string integers. If it's not possible to parse, then add null
// arseInteger(["1", "2", "34"]); // [1, 2, 34]; 
// parseInteger(["1", "px", "2323"]); // [1, null, 2323];



let arr = ["1", "px", "2323"];


function getParses (arr) {
    return arr.map((x) => +x || null);
}

console.log(getParses(arr));