function max(array) {
    let res = array[0];
    for (let i of array) {
        if (i > res) {
            res = i;
        }
    }
    return res;
}

let testarray = [5, 3, 19, 231, 32, 90, 213];

let x = max(testarray);
console.log(x)

function contains(array, element) {
    for (let i of array) {
        if (element === i) {
            return true;
        }
    }
    return false;
}

console.log(contains(testarray, "32"));

function sum(array) {
    let res = 0;
    for (let i of array) {
        if (Number.isInteger(i)) {
            res += i;
        }
    }
    return res;
}

console.log(sum(testarray))