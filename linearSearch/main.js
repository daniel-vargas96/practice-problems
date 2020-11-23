//this function accepts an array
//loop through the array and check if 
//the current array element is equal to the value
//if it is, return the index at which the element is found
// if the value is never found, return -1

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([10,15,20,25,30], 15));
console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4));
