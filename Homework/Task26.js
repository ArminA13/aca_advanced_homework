//splace
const numbers = [1, 2, 3, 4, 5];

function splace (arr, start, deleteItem, ...add) {

    for (let i = deleteItem || 0; i < arr.length; i++)  {
        

        if (start === undefined && deleteItem === undefined) {
            return arr;
        } else {
            console.log(deleteItem, i);
            if (deleteItem === i) {
                // arr[i] = arr[i + 1];
                // arr.length = i;
                // console.log(arr[i]);

                // arr[i] = arr[i]
                console.log(i);
            } else {
                
            }
            
        }
        
        if (start !== undefined && deleteItem === undefined) {
            console.log("start !== undefined && deleteItem === undefined");
            if (start < 0) {
                console.log("start < 0");
                arr.length = arr.length + start;
                return arr;
            } else if (start === 0) {
                console.log("start === 0");
                return [];
            } else {
                console.log("else");
                arr.length = start;
                return arr;
            }
        }
    }

    // arr.length = deleteItem;

    return arr;
}

console.log(splace(numbers, 0, 3));