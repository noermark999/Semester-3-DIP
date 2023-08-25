function bubbleSort(list) {
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
}

let listtest = [7, 13, 9, 8, 4, 1, 2, 16, 0];
bubbleSort(listtest);
console.log(listtest.toString());

function binarySearch(array, element) {
    let position = -1
    let target = element;
    let list = array;
    let left = 0;
    let right = list.length - 1;
    while (left <= right && position === -1) {
        let middle = parseInt((left + right) / 2);
        let k = list[middle];
        if (k == target) {
            position = middle;
        }
        if (k > target)
            right = middle - 1;
        else
            left = middle + 1;
    }
    return position;
}

console.log(binarySearch(listtest, 9));