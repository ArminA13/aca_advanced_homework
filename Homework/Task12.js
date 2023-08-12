// Create a function that takes an array of numbers arr, a string str and return an array of numbers as
// per the following rules:
//   - "Asc" returns a sorted array in ascending order. 
//   - "Desc" returns a sorted array in descending order.

function sortBy (arr, str) {
    switch (str) {
        case "Asc":
            return arr.sort((x, y) => x - y);
        case "Desc":
            return arr.sort((x, y) => y - x);
        default:
            return arr;
    }
}

console.log(sortBy([7, 8, 11, 66]));