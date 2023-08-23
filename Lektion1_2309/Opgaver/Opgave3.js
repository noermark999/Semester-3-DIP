// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
        }
    }
}
function binarySearch(list1, low, high, x) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if (list1[mid] == x) {
            return mid;
        } else if (list1[mid] < x) {
            binarySearch(list1, low, mid-1, x);
        } else {
            binarySearch(list1,mid+1,high,x);
        }
    }
    return -1;
}
console.log(binarySearch(list,0,list.length-1,120))
//console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16